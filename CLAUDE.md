# CLAUDE.md — "Karov LaLev" (קרוב ללב) Card Journey

## Project Overview

"Karov LaLev" is a two-player, intimate question-card game designed to build closeness between couples. Players take turns drawing question cards and answering them aloud — there is no in-app text input for answers; the app's job is purely to present the questions, manage progression, and set the emotional atmosphere.

The experience is entirely front-end for this phase (no backend, no database). Card content lives in static local data files, structured so a future phase can swap them for a real API/DB without touching game logic.

**Language & Direction:** The entire UI is in Hebrew, right-to-left (RTL). All layout, text alignment, and component mirroring must respect RTL conventions.

**Design source:** All visual design for this project is produced in **Google Stitch**, under the Stitch project named **"Karov LaLev Card Journey"**. Design retrieval/integration should use the **Stitch MCP** connector — pull screens, components, and design tokens from that Stitch project rather than improvising new UI from scratch. If a screen or component is needed that doesn't yet exist in the Stitch project, flag it rather than inventing a divergent visual style.

**Git workflow:** Never run `git commit` or `git push` unless the user explicitly asks for it in that moment — do not commit proactively after finishing a task. Commit messages must not include Claude's name, "Co-Authored-By", or any AI-attribution trailer.

---

## Functional Specification

### Core Game Loop
1. Player opens the app and lands on the **Welcome Screen**.
2. Welcome Screen explains the concept (closeness built layer by layer) and includes an **18+ toggle** that determines whether cards tagged `isAdult: true` are included in the shuffled deck for this session.
3. Player taps **"התחילו את המסע"** (Start the Journey). This tap is also the anchor point for starting background audio (browser autoplay policies require a user gesture before audio can play).
4. The app builds a session deck: all available cards (filtered by the 18+ toggle), shuffled, with **no repeats within a session**.
5. **Game Screen**: the active player taps the face-down card to trigger a 3D flip-reveal animation showing the question text.
6. Players discuss the question aloud (no answer is typed or stored by the app).
7. Turn advances to the other player; a new card is drawn.
8. **Depth auto-progresses with turn count** — early turns draw only from lower-depth cards, later turns unlock higher-depth cards. (Exact turn thresholds are configurable — see `depthProgression` below.)
9. Players may **end the session at any time** — there is no forced minimum or maximum number of turns.
10. If the deck is exhausted (all available cards for the session have been drawn), the app shows the **End Screen**: "סיימתם את המסע" (You've completed the journey), with an option to start a new journey.

### Screens
- **WelcomeScreen** — intro, atmosphere, 18+ toggle, start CTA
- **GameScreen** — card draw/flip, turn indicator, end-session control
- **EndScreen** — completion message, restart option

### Card Data Model
Each card is a static object with fields designed to support both today's simple depth-based selection and a future AI-driven selection layer:

```ts
interface Card {
  id: string;            // unique stable identifier, e.g. "past-003"
  text: string;          // the question text, in Hebrew
  category: Category;    // see category list below
  depth: 1 | 2 | 3 | 4;  // 1 = light/opening, 4 = deeply intimate
  isAdult: boolean;      // true if card should only appear when 18+ toggle is on
  tags?: string[];       // reserved for future AI/relational logic, unused in v1
}
```

### Categories (initial set)
עבר, זוגיות, חלומות, שאיפות, לימודים, פחדים, חוויות, אקסטרים, רגשות, ערכים, דמיון/מה אם, חושניות, עתיד משותף, הומור/קלילות, חרטות

Cards should be distributed across categories and depth levels so that early depth tiers include lighter categories (הומור, לימודים) and higher depth tiers include heavier categories (פחדים, חושניות, חרטות).

### Depth Progression Logic
Turn-count-based, not random. Example structure (tune during implementation):
- Turns 1–3 → depth 1 only
- Turns 4–7 → depth 1–2
- Turns 8–12 → depth 1–3
- Turns 13+ → depth 1–4

This should live in a single configurable module (see `depthProgression.ts` below) so thresholds can be tuned without touching component logic.

### No-Repeat Rule
Track drawn card IDs in session state (in-memory, not persisted). When drawing a new card, filter the eligible pool (by current unlocked depth range and 18+ setting) to exclude already-drawn IDs.

### Audio
- Background music: looping ambient track(s), generated via Suno AI, played after the user's first interaction (Start button tap).
- Sound effects: a short "whoosh"/reveal sound on card flip. Basic implementation via the Web Audio API or a lightweight library (e.g. Howler.js).
- Include a mute/volume control accessible from the Game Screen.

---

## Technical Architecture

### Stack
- React (functional components + hooks)
- React Router (`react-router-dom`) — screen navigation is real client-side routing (`/`, `/game`, `/end`), not conditional rendering driven by local state
- Tailwind CSS v4 (CSS-based `@theme` tokens in `index.css`, not a JS config file)
- Framer Motion (card flip / transition animations)
- Web Audio API or Howler.js (sound) — not yet wired
- No backend / no database in this phase — all data is local static modules

### Design System (current)
The active Stitch design system is **"After Hours"**: near-black surfaces (`#0a0a0a`) with a single saturated scarlet accent (`#ff1a3c`) reserved for CTAs/glows/active states — deliberately restrained rather than colorful. Typography is **Rubik** (Hebrew-native, used for all body/label/button text) paired with a bold Rubik Black wordmark treatment for headlines/logo (not a serif — an earlier serif treatment was tried and rejected). See the Stitch project's `designMd` for full rationale.

### Folder Structure

Organize components by **screen**, with a shared layer for cross-screen primitives. This keeps the codebase easy to navigate as it grows and keeps screen-specific logic isolated:

```
src/
  screens/
    Welcome/
      WelcomeScreen.tsx
      AgeToggle.tsx
      StartButton.tsx
    Game/
      GameScreen.tsx
      CardDisplay.tsx        // card back/front + flip animation
      TurnIndicator.tsx
      EndSessionControl.tsx
    End/
      EndScreen.tsx
  components/               // shared, screen-agnostic UI primitives
    ui/
      Button.tsx
      Toggle.tsx
      GlowBackground.tsx
  data/
    cards.ts                // the static card array (Card[])
    categories.ts           // category enum/list + display labels
    depthProgression.ts     // turn-count → unlocked depth range logic
  hooks/
    useGameSession.ts       // deck building, shuffling, draw logic, turn tracking
    useAudio.ts             // background music + SFX playback control
  utils/
    shuffle.ts              // deck shuffling utility (e.g. Fisher-Yates)
  App.tsx                   // <Routes> definitions (react-router-dom): "/" → Welcome, "/game" → Game, "/end" → End
  main.tsx                  // wraps <App /> in <BrowserRouter>
  types.ts                  // shared TypeScript types (Card, Category, GameState)
```

Each route in `App.tsx` is a thin wrapper component that calls `useNavigate()` and passes the resulting navigation callbacks into the actual screen component as props — the screen components themselves (`WelcomeScreen`, `GameScreen`, `EndScreen`) stay routing-agnostic and only know about `onStart`/`onEndSession`/`onRestart`/`onExit` callback props.

### Data Management Guidelines
- `data/cards.ts` exports a single typed array of `Card` objects. Keep it as the single source of truth for content — no card text duplicated elsewhere.
- `data/categories.ts` centralizes category identifiers and their Hebrew display labels, so category names are never hardcoded as raw strings across components.
- `data/depthProgression.ts` centralizes the turn-count → depth-range mapping so game-balance tuning never requires touching component or hook code.
- Structure `cards.ts` so that adding a future remote-fetch layer (e.g. replacing the static array with an API call) only requires changing how the array is populated, not how it's consumed by `useGameSession`.

### State Management
- Session state (current turn number, drawn card IDs, unlocked depth range, 18+ setting, current card) lives in a single custom hook (`useGameSession`) rather than scattered across components. "Active screen" is no longer part of this state — it's owned by React Router instead (see Stack above).
- Because screens are now separate routes rather than conditionally-rendered siblings of one parent, `useGameSession`'s state needs to survive navigation between them. It's exposed via a small React Context (`SessionProvider`, wrapping `<Routes>` in `App.tsx`) so any route can read/update the session without prop-drilling through the router. Routing and session state are kept as separate concerns: React Router owns *which screen*, Context owns *what's happening in the game*.
- No persistence layer needed in this phase — session state resets on page reload.

### Code Quality Requirements
- **Every non-trivial function must include a code comment** explaining its purpose and any non-obvious logic (e.g. shuffle algorithm, depth-unlock calculation, deck-filtering logic). Simple one-line getters/setters don't need comments; anything involving a loop, filter, conditional branching, or algorithm does.
- Avoid duplication — shared logic (e.g. filtering eligible cards) should live in one utility/hook, not be reimplemented per component.
- Keep components focused: one screen or one clear UI responsibility per file.
- Use TypeScript types/interfaces for all data structures (`Card`, `Category`, `GameState`) — no loose `any` typing on core game data.

### Responsiveness
- Mobile-first layout (primary target: mobile portrait), scaling gracefully to tablet/desktop.
- Large, thumb-friendly tap targets; primary actions anchored near the bottom of the viewport on mobile.
- Respect safe-area insets for notched devices.

---

## Current Status
- **Frontend-only pass complete for all three screens** (Welcome, Game, End) — visual design, routing, and interaction polish are done, matching the "After Hours" Stitch design system.
- **Game logic not yet wired**: `GameScreen` currently cycles through a small hardcoded `DEMO_CARDS` array with local `useState`, not a real deck/session. `useGameSession`, `data/cards.ts`, `data/categories.ts`, `data/depthProgression.ts`, and `utils/shuffle.ts` don't exist yet — that's the next planned step, along with the `SessionProvider` Context described under State Management.
- Audio (`useAudio.ts`) is not implemented; the mute button on the Game screen currently only toggles local UI state with no actual sound.

---

## Out of Scope for This Phase
- No backend, database, or persistence
- No user accounts or multi-session history
- No AI-generated or AI-adapted questions (data model leaves room for this later via the optional `tags` field, but no AI logic should be implemented now)
- No typed/recorded player answers
