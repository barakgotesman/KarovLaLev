# קרוב ללב (Karov LaLev)

An intimate, Hebrew-language question-card game for two players — designed to spark real conversation between couples. Players take turns drawing question cards and answering them aloud; the app's job is to present the questions, manage progression, and set the mood. There's no in-app text input for answers.

**Live app:** https://karov-lalev.vercel.app

## How it works

1. **Welcome** — atmosphere and a single start CTA.
2. **Setup** — a short wizard: enter both players' names, choose whether 18+ content is included, and optionally filter by topic category.
3. **Game** — flip a face-down card to reveal the question, discuss it out loud, then pass the turn. Question depth (light → intimate) increases gradually as more turns are played. End the session any time.
4. **End** — a personalized wrap-up once the deck runs out, with the option to start a new journey.

## Tech stack

- [React](https://react.dev/) 19.2 (functional components + hooks)
- [React Router](https://reactrouter.com/) 7.18 for client-side navigation
- [Tailwind CSS](https://tailwindcss.com/) v4.3
- [Framer Motion](https://www.framer.com/motion/) 12.42 for the card-flip and screen transitions
- [Vite](https://vite.dev/) 8.1 for dev/build tooling
- TypeScript ~6.0

No backend or database in this phase — all card content and session state are local. Session state is in-memory and resets on page reload.

## Getting started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

Other scripts:

```bash
npm run build    # type-check and build for production
npm run preview  # preview the production build locally
npm run lint      # lint with oxlint
```

## Project structure

```
src/
  screens/     # one folder per screen (Welcome, Setup, Game, End)
  components/  # shared, screen-agnostic UI primitives
  context/     # SessionProvider — the live game session, shared across routes
  data/        # the card bank, categories, and depth-progression logic
  hooks/       # useGameSession (deck building/draw logic) and useAudio
  utils/       # small shared helpers (shuffle, eligible-card filtering)
  App.tsx      # route definitions
```

See `CLAUDE.md` for a fuller description of the game design and architecture.

## Design

Visual design is produced in Google Stitch, under the "Karov LaLev Card Journey" project, using the "After Hours" design system: near-black surfaces with a single scarlet accent, set in Rubik.

## Deployment

Deployed on [Vercel](https://vercel.com/), connected to this repository — pushes to `master` deploy to production automatically.
