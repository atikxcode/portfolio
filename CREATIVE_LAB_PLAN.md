# Creative Lab Implementation Plan

This plan executes the "Creative Lab" concept approved in `NEW_FEATURE_PLAN.md`.

## User Review Required
- **Command Bar**: The existing `CommandBar.tsx` has `hidden` classes on its groups, making navigation items invisible. I will remove these `hidden` classes to ensure the menu works as intended.
- **Ctrl+K**: The new "Open Creative Lab" command will be added to the existing `CommandBar` component, preserving the current `Ctrl+K` shortcut.

## Proposed Changes

### Infrastructure
#### [NEW] [app/lab/page.tsx](file:///c:/Users/User/Desktop/Portfolio/portfolio/app/lab/page.tsx)
- The main hub for the Creative Lab.
- Distinct dark UI.
- Grid layout linking to experiments.

#### [MODIFY] [components/ui/CommandBar.tsx](file:///c:/Users/User/Desktop/Portfolio/portfolio/components/ui/CommandBar.tsx)
- Remove `hidden` classes from `Command.Group`.
- Add "Open Creative Lab" item to the Navigation group.

### Experiments

#### [NEW] [components/lab/SkillGalaxy.tsx](file:///c:/Users/User/Desktop/Portfolio/portfolio/components/lab/SkillGalaxy.tsx)
- **Tech**: `@react-three/fiber` (already installed).
- **Visual**: 3D orbiting text nodes representing skills.
- **Route**: `app/lab/skill-galaxy/page.tsx`.

#### [NEW] [components/lab/CodeCity.tsx](file:///c:/Users/User/Desktop/Portfolio/portfolio/components/lab/CodeCity.tsx)
- **Tech**: `@react-three/fiber`.
- **Visual**: 3D Isometric city generated from mock GitHub data.
- **Route**: `app/lab/code-city/page.tsx`.

#### [NEW] [components/lab/ToneMatrix.tsx](file:///c:/Users/User/Desktop/Portfolio/portfolio/components/lab/ToneMatrix.tsx)
- **Tech**: Web Audio API (Native).
- **Visual**: 16x8 Grid sequencer.
- **Route**: `app/lab/tone-matrix/page.tsx`.

## Verification Plan

### Automated Tests
- None (Visual/Interactive features).

### Manual Verification
1.  **Command Bar**: Press `Ctrl+K`. Verify "Open Creative Lab" appears and works. Verify other links (About, Projects) are now visible.
2.  **Skill Galaxy**: Navigate to `/lab/skill-galaxy`. Verify 3D scene loads and rotates.
3.  **Code City**: Navigate to `/lab/code-city`. Verify 3D buildings appear.
4.  **Tone Matrix**: Navigate to `/lab/tone-matrix`. Click cells, press Play, and verify sound output.
