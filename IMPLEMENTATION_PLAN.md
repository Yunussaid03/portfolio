# Implementation Plan

## Step 1: Global Physics (Smooth Scroll & Layout)
- Implement `@studio-freight/react-lenis` in a `SmoothScroll.tsx` wrapper.
- Update `app/layout.tsx` to enforce a pure black background, white text, and wrap `{children}` in the smooth scroll component.

## Step 2: The Brutalist Hero & Spotlight
- Refactor `app/page.tsx`.
- Implement a massive, viewport-filling typography block (`SYSTEMS ENGINEER`).
- Use `framer-motion` to create a clipping mask effect where the text slides up from a hidden overflow state on load.
- Integrate the existing `Spotlight.tsx` to track mouse movement behind the text.

## Step 3: The Sticky Stack & About Section
- Create a scroll-triggered section using GSAP where the left column (About text) pins/sticks to the screen while the right column (Tech Stack: Node.js, C++, Ubuntu, Agents) scrolls past.

## Step 4: Project Showcase Grid
- Build large, high-contrast project cards (`Shadow AI`, `UniWallet`) with massive numbering (`_01.`, `_02.`) and hover-triggered image scaling effects.
