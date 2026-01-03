# Creative Lab Expansion Plan

The user requested 3 additional experiments to expand the Lab.

## Proposed Experiments

### Experiment 04: Global Network (3D Globe)
-   **Concept**: Visualize global reach/connectivity.
-   **Tech**: Reuse `components/ui/Globe.tsx` (ThreeGlobe).
-   **Files**:
    -   `app/lab/global-network/page.tsx`
    -   `components/lab/GlobalNetwork.tsx` (Wrapper for existing Globe)

### Experiment 05: Neural Grid (Shader Matrix)
-   **Concept**: A hypnotic, mouse-reactive dot matrix effect.
-   **Tech**: Reuse `components/ui/CanvasRevealEffect.tsx`.
-   **Files**:
    -   `app/lab/neural-grid/page.tsx`
    -   `components/lab/NeuralGrid.tsx`

### Experiment 06: Typing Zen (Particle Effects)
-   **Concept**: A minimal typing interface where text explodes into particles.
-   **Tech**: Framer Motion (layout animations) + Canvas API (particles).
-   **Files**:
    -   `app/lab/typing-zen/page.tsx`
    -   `components/lab/TypingZen.tsx`

## Implementation Steps
1.  **Update Config**: Add new experiments to the list in `app/lab/page.tsx`.
2.  **Build Components**: Create the wrapper components.
3.  **Build Routes**: Create the page files.
4.  **Verify**: Test each route.

## User Verification
-   Navigate to `/lab`.
-   Verify 3 new cards appear.
-   Test interaction for each.
