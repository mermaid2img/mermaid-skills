---
name: mermaid-preview-refinement
description: Improve Mermaid diagrams through a render, inspect, and refine loop. Use when source is syntactically valid but visually weak, especially for dense architecture maps, multi-step flows, or mobile previews; do not use when the main task is extracting facts for a new diagram.
---

# Mermaid Preview Refinement

Treat valid syntax as the start of visual review, not the finish. A diagram is done only when its rendered preview communicates the intended structure at the target viewport.

## Workflow

1. Identify the diagram's primary message and target viewport.
2. Preserve a copy of the current editable source.
3. Render the current draft with an already available renderer.
4. Inspect the preview for reading order, hierarchy, density, aspect ratio, crossings, label wrapping, clipping, contrast, and overflow.
5. Choose the smallest structural change that addresses the largest visual problem.
6. Render again and compare with the previous preview.
7. Stop after at most two autonomous refinement rounds unless the user requests more.

## Prefer structural fixes

Apply fixes in this order when relevant:

1. Change direction, such as `LR` to `TD`, to fit the viewport.
2. Shorten labels without removing meaning.
3. Group related nodes with `subgraph` or a native construct.
4. Reorder declarations to improve layout and reduce crossings.
5. Split an overloaded diagram into overview and detail views.
6. Change diagram type when the current grammar fights the information.
7. Add restrained styling only after the structure reads well.

Do not solve structural problems with smaller text, excessive colors, or decorative classes.

## Safety and tooling

- Reuse the project renderer or preview surface when available.
- Do not install packages, run remote code, or change global tooling without explicit approval.
- If rendering is unavailable, return the source and disclose that visual validation was not completed.
- Preserve the final `.mmd` source alongside exported images.

## Definition of done

- Mermaid syntax renders without errors.
- The core idea is understandable within a few seconds.
- Labels are readable and not clipped at the intended viewport.
- There is no avoidable horizontal overflow or obvious edge congestion.
- The response distinguishes syntax checks from visual review.
- The user can compare the final preview with the original or prior iteration.
