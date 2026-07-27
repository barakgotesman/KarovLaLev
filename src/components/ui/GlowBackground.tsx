import { useEffect, useMemo, useRef } from 'react';

const VERTEX_SHADER = `
attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

const FRAGMENT_SHADER = `
precision highp float;
varying vec2 v_texCoord;
uniform float u_time;

float noise(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  vec2 uv = v_texCoord;
  vec3 color = vec3(0.02, 0.015, 0.017);

  float glow = 1.0 - length(uv - vec2(0.5, -0.15));
  glow = pow(max(0.0, glow), 4.0);
  glow += noise(vec2(u_time * 0.08, 0.0)) * 0.02;

  vec3 scarlet = vec3(1.0, 0.102, 0.235);
  color += scarlet * glow * 0.35;

  float particles = noise(uv * 140.0 + u_time * 0.04);
  if (particles > 0.995) {
    color += scarlet * 0.06;
  }

  gl_FragColor = vec4(color, 1.0);
}`;

interface Spark {
  top: string;
  left: string;
  size: number;
  flyDuration: number;
  flyDelay: number;
  pulseDuration: number;
  dx: number;
  dy: number;
}

interface GlowBackgroundProps {
  /** When provided, renders this image instead of the procedural shader
   * as the base layer (e.g. a hero illustration already matching the
   * near-black + scarlet palette). Sparks and gradient overlay still apply. */
  heroImage?: string;
}

/** Ambient near-black backdrop: either a hero image or a WebGL scarlet-glow
 * shader behind a gradient overlay, plus a handful of drifting, pulsing
 * "sparks" — meant to read as small bursts of attraction rather than
 * fireplace embers, each with a bright core and a soft halo that breathes. */
export default function GlowBackground({ heroImage }: GlowBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Fixed on mount so sparks don't re-randomize on re-render.
  const sparks = useMemo<Spark[]>(
    () =>
      Array.from({ length: 14 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 2,
        flyDuration: Math.random() * 14 + 16,
        flyDelay: Math.random() * 10,
        pulseDuration: Math.random() * 1.5 + 1.5,
        dx: Math.random() * 140 - 70,
        dy: Math.random() * -160 - 40,
      })),
    [],
  );

  useEffect(() => {
    if (heroImage) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl') ?? canvas.getContext('experimental-webgl');
    if (!gl) return;
    const webgl = gl as WebGLRenderingContext;

    function syncSize() {
      const w = canvas!.clientWidth || 1280;
      const h = canvas!.clientHeight || 720;
      if (canvas!.width !== w || canvas!.height !== h) {
        canvas!.width = w;
        canvas!.height = h;
      }
    }

    const resizeObserver = new ResizeObserver(syncSize);
    resizeObserver.observe(canvas);
    syncSize();

    function compile(type: number, src: string) {
      const shader = webgl.createShader(type)!;
      webgl.shaderSource(shader, src);
      webgl.compileShader(shader);
      return shader;
    }

    const program = webgl.createProgram()!;
    webgl.attachShader(program, compile(webgl.VERTEX_SHADER, VERTEX_SHADER));
    webgl.attachShader(program, compile(webgl.FRAGMENT_SHADER, FRAGMENT_SHADER));
    webgl.linkProgram(program);
    webgl.useProgram(program);

    const buffer = webgl.createBuffer();
    webgl.bindBuffer(webgl.ARRAY_BUFFER, buffer);
    webgl.bufferData(
      webgl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      webgl.STATIC_DRAW,
    );
    const position = webgl.getAttribLocation(program, 'a_position');
    webgl.enableVertexAttribArray(position);
    webgl.vertexAttribPointer(position, 2, webgl.FLOAT, false, 0, 0);

    const uTime = webgl.getUniformLocation(program, 'u_time');
    let frameId: number;

    function render(t: number) {
      webgl.viewport(0, 0, canvas!.width, canvas!.height);
      if (uTime) webgl.uniform1f(uTime, t * 0.001);
      webgl.drawArrays(webgl.TRIANGLE_STRIP, 0, 4);
      frameId = requestAnimationFrame(render);
    }
    frameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
    };
  }, [heroImage]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {heroImage ? (
        <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-90" />
      ) : (
        <div className="absolute inset-0 w-full h-full opacity-60">
          <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 z-10">
        {sparks.map((spark, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              top: spark.top,
              left: spark.left,
              width: spark.size * 5,
              height: spark.size * 5,
              animation: `spark-fly ${spark.flyDuration}s ease-in-out ${spark.flyDelay}s infinite`,
              // @ts-expect-error custom properties consumed by the spark-fly keyframes
              '--dx': `${spark.dx}px`,
              '--dy': `${spark.dy}px`,
            }}
          >
            {/* soft breathing halo */}
            <div
              className="absolute inset-0 rounded-full bg-primary blur-[3px]"
              style={{ animation: `spark-pulse ${spark.pulseDuration}s ease-in-out infinite` }}
            />
            {/* bright core */}
            <div
              className="absolute rounded-full bg-primary"
              style={{
                top: spark.size * 2,
                left: spark.size * 2,
                width: spark.size,
                height: spark.size,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
