# CLAUDE.md — "Karov LaLev" (קרוב ללב) Card Journey

## Project Overview

"Karov LaLev" is a two-player, intimate question-card game designed to build closeness between couples. Players take turns drawing question cards and answering them aloud — there is no in-app text input for answers; the app's job is purely to present the questions, manage progression, and set the emotional atmosphere.

The experience is entirely front-end for this phase (no backend, no database). Card content lives in static local data, structured so a future phase can swap it for a real API/DB without touching game logic.

**Language & Direction:** The entire UI is in Hebrew, right-to-left (RTL). All layout, text alignment, and component mirroring must respect RTL conventions.

**Design source:** All visual design for this project is produced in **Google Stitch**, under the Stitch project named **"Karov LaLev Card Journey"**. Design retrieval/integration should use the **Stitch MCP** connector — pull screens, components, and design tokens from that Stitch project rather than improvising new UI from scratch. If a screen or component is needed that doesn't yet exist in the Stitch project, flag it rather than inventing a divergent visual style.

**Git workflow:** Never run `git commit` or `git push` unless the user explicitly asks for it in that moment — do not commit proactively after finishing a task. Commit messages must not include Claude's name, "Co-Authored-By", or any AI-attribution trailer.

---

## Core Experience

1. **Welcome Screen** — atmosphere and a single "start" CTA.
2. **Setup wizard** — players enter both their names, choose whether 18+ content is included, and optionally filter which topic categories to draw from.
3. The app builds a shuffled deck of eligible cards for the session, with no repeats.
4. **Game Screen** — the active player flips a face-down card to reveal the question, the pair discusses it aloud, then the turn passes and a new card is drawn. Question depth (how light vs. how intimate) gradually increases as more turns are played. Players can end the session at any time.
5. **End Screen** — shown once the deck runs out, personalized with the players' names and how many turns they played, with an option to start a new journey.

Background music starts on the Welcome screen's CTA tap (the first user gesture), with a mute control available during the game. A short reveal sound plays on card flip.

---

## Content

- Questions are organized by **topic category** (e.g. humor, the past, values, dreams, intimacy) and by **depth** (light/opening through deeply intimate), so pacing feels natural rather than random.
- An **18+ toggle** in setup controls whether more sensual/intimate cards are eligible.
- Players can optionally narrow the session to specific categories; leaving nothing selected draws from the whole bank.
- The setup flow shows a live preview of how many cards a given filter combination will produce.

---

## Technical Architecture

**Stack:** React (functional components + hooks), React Router for real client-side navigation between screens, Tailwind CSS v4, Framer Motion for the card-flip/transition animations. No backend or database in this phase — all content is local static data.

**Design system ("After Hours"):** near-black surfaces with a single saturated scarlet accent reserved for CTAs/glows/active states — deliberately restrained rather than colorful. Typography is Rubik throughout, with a bold Rubik Black treatment for headlines/logo.

**Structure:** components are organized by screen (Welcome, Setup, Game, End) with a shared layer for cross-screen UI primitives (buttons, toggles, inputs, background effects). Game session state (turn count, drawn cards, current card, settings) lives in one hook exposed via React Context, so it survives navigation between routed screens without prop-drilling. Routing owns *which screen* is showing; the session context owns *what's happening in the game*.

**Responsiveness:** mobile-first, with thumb-friendly tap targets and safe-area-aware layout for notched devices, scaling gracefully up to tablet/desktop.

---

## Current Status
- All four screens are built and wired to a real, working session end-to-end (deck building, shuffling, draw logic, depth progression), matching the "After Hours" design system.
- Background music playback is implemented; sound effects beyond the mute control are not yet wired.
- No persistence — session state resets on page reload, by design for this phase.

---

## Out of Scope for This Phase
- No backend, database, or persistence
- No user accounts or multi-session history
- No AI-generated or AI-adapted questions (the data model leaves room for this later, but no AI logic should be implemented now)
- No typed/recorded player answers
