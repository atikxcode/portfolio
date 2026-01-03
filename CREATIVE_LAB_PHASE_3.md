# Creative Lab Phase 3: Component Showcase (Experiments 07-12)

The user requested 6 more experiments. We will leverage existing high-quality UI components to create a "Component Showcase" within the Lab.

## Proposed Experiments

### Experiment 07: Hologram (3D Pin)
-   **Concept**: Interactive 3D floating pin effect.
-   **Tech**: `components/ui/3d-pin.tsx`.
-   **Route**: `/lab/hologram`.

### Experiment 08: Infinity (Moving Cards)
-   **Concept**: Infinite scrolling testimonial/card stream.
-   **Tech**: `components/ui/InfiniteMovingCards.tsx`.
-   **Route**: `/lab/infinity`.

### Experiment 09: Focus (Spotlight)
-   **Concept**: Dynamic spotlight effect on hover/focus.
-   **Tech**: `components/ui/Spotlight.tsx`.
-   **Route**: `/lab/focus`.

### Experiment 10: Grid (Bento)
-   **Concept**: Asymmetric, responsive bento grid layout.
-   **Tech**: `components/ui/BentoGrid.tsx`.
-   **Route**: `/lab/grid`.

### Experiment 11: Decode (Text Reveal)
-   **Concept**: Cyberpunk-style text decoding animation.
-   **Tech**: `components/ui/TextGenerateEffect.tsx`.
-   **Route**: `/lab/decode`.

### Experiment 12: Borderline (Moving Borders)
-   **Concept**: Animated gradient borders for cards/buttons.
-   **Tech**: `components/ui/MovingBorders.tsx`.
-   **Route**: `/lab/borderline`.

## Implementation Plan
1.  **Create Routes**: Generate `page.tsx` for each experiment using the respective component.
2.  **Wrappers**: Create simple wrappers in `components/lab/` if the UI component needs data/props setup.
3.  **Update Hub**: Add these 6 to `app/lab/page.tsx`.
