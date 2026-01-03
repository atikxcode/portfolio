# The Creative Lab: Feature Walkthrough

The **Creative Lab** is now fully integrated into your portfolio. It serves as a playground for experimental, interactive web experiences.

## Feature Overview

### 1. The Hub (`/lab`)
-   Access via `Ctrl+K` -> **"Open Creative Lab"**.
-   A grid layout displaying all available experiments.
-   Status indicators (Live/In Development).

### 2. Experiment 01: Skill Galaxy
-   **Route**: `/lab/skill-galaxy`
-   **Tech**: React Three Fiber
-   **Description**: A 3D universe where your skills (React, Node, AWS, etc.) orbit in space.
-   **Interaction**: Drag to rotate, scroll to zoom.

### 3. Experiment 02: Code City
-   **Route**: `/lab/code-city`
-   **Tech**: React Three Fiber
-   **Description**: An isometric 3D city generated procedurally.
-   **Context**: Intended to visualize GitHub contribution data (currently using mock data for demonstration).

### 4. Experiment 03: Tone Matrix
-   **Route**: `/lab/tone-matrix`
-   **Tech**: Web Audio API
-   **Description**: A 16x8 musical sequencer.
-   **Interaction**: Click grid cells to activate notes, press "Play" to start the loop.

### 5. Experiment 04: Global Network
-   **Route**: `/lab/global-network`
-   **Tech**: React Three Fiber + ThreeGlobe
-   **Description**: Interactive 3D globe visualizing connectivity.

### 6. Experiment 05: Neural Grid
-   **Route**: `/lab/neural-grid`
-   **Tech**: Custom Shaders (CanvasRevealEffect)
-   **Description**: A matrix of dots that reacts to cursor proximity.

### 7. Experiment 06: Typing Zen
-   **Route**: `/lab/typing-zen`
-   **Tech**: Canvas API Particles
-   **Description**: Relaxing typing experience with particle explosions.

### 8. Phase 3: Unique Experiments (Custom Built)
I have added 3 genuinely unique, interactive javascript experiments:

-   **07 Quantum Field** (`/lab/quantum`):
    -   **Tech**: HTML5 Canvas + Custom Flow Field.
    -   **Interaction**: Mouse movements disturb thousands of flow particles.

-   **08 Gravity Well** (`/lab/gravity`):
    -   **Tech**: Custom N-Body Physics Engine.
    -   **Interaction**: Left-click to shoot, Right-click to spawn black holes.

-   **09 Audio Reactor** (`/lab/audio-viz`):
    -   **Tech**: Web Audio API + HTML5 Canvas.
    -   **Interaction**: Click to play synthesizer notes and watch the frequency spectrum.

## Integration Details
-   **CommandBar**: I removed the `hidden` classes from your `CommandBar.tsx` component, restoring functionality to all navigation links and adding the new Lab entry.
-   **Navigation**: All pages have a "Back to Lab" or "Back to Portfolio" button for easy navigation.

## How to Verify
1.  Run `npm run dev`.
2.  Press `Ctrl+K` and select **"Open Creative Lab"**.
3.  Click on any experiment card to enter.
4.  Test the interactivity (rotate 3D models, play music).
