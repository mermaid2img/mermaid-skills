---
name: mermaid-publishing
description: Prepare Mermaid diagrams for documentation, blogs, mobile articles, presentations, and print. Use when target-platform compatibility, export format, image quality, accessibility, or final preview matters; do not use only to generate the initial diagram model.
---

# Mermaid Publishing

Prepare the diagram for the place where readers will actually see it. A valid source file is not publication-ready until the target platform, viewport, and asset format have been checked.

## Decide whether Mermaid is the right visual

Use Mermaid when nodes and edges carry the teaching value and the structure may need later editing.

Prefer another form when:

- a real interface or result must be inspected: use a screenshot or delivered artifact
- atmosphere or metaphor is the goal: use a concept image
- dense comparison or labeled composition is central: use an information graphic or table
- the diagram only repeats the adjacent paragraph without making a relationship faster to understand

Delete a low-value visual instead of polishing it indefinitely.

## Establish the target

Identify the platform, viewport, supported Mermaid version, background, theme, and required output format. Read [references/publishing-targets.md](references/publishing-targets.md) when choosing an asset format or preparing a narrow/mobile destination.

## Prepare the source

1. Keep the editable Mermaid source under version control.
2. Render with the target Mermaid version when known.
3. Use one concept per diagram and labels that survive the final display width.
4. Prefer `TD` for narrow layouts when `LR` creates horizontal scrolling.
5. Keep the latest source, preview, and exported asset from the same revision.

## Export and inspect

- Prefer SVG for scalable web and print workflows that accept it.
- Prefer PNG at 2x scale for broad compatibility and text-heavy diagrams.
- Avoid JPG for line art and small text unless the destination requires it.
- Use PDF for formal print or page-layout workflows when supported.
- Check background transparency, padding, cropping, fonts, contrast, and text sharpness.
- Inspect the actual exported asset, not only the editor preview.

For mobile publishing, resize the final asset to the approximate content width and verify that titles, node labels, and edge labels remain readable without pinch zoom.

## Authorization boundary

Local rendering, export, and preview are preparation steps. Uploading, publishing, replacing a remote asset, or creating a platform draft requires the authority appropriate to that external action.

Do not install a renderer or export dependency without explicit approval. If the required target cannot be reproduced, state which compatibility or visual checks remain unverified.

## Deliver

Provide the editable source, chosen export asset, target and format rationale, and a concise publication checklist result. Report separately whether syntax, visual layout, export quality, and platform compatibility were verified.
