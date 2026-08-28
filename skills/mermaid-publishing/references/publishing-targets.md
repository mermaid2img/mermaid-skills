# Publishing targets

## Format choice

| Destination | Preferred asset | Key check |
| --- | --- | --- |
| GitHub, GitLab, or Mermaid-native docs | Mermaid source | Target renderer version supports the syntax |
| Web documentation | SVG | Fonts, accessibility text, responsive container |
| Blog or mobile article | PNG at 2x | Readable at content width, no horizontal scroll |
| Presentation | SVG or high-resolution PNG | Legible from a distance, enough surrounding padding |
| Word processor | PNG or SVG when supported | No font substitution or clipped labels |
| Print or formal report | SVG or PDF | Vector fidelity, page fit, light background |

## Mobile checks

- Test at the destination's actual or approximate content width.
- A very tall diagram may be displayed narrower than a landscape diagram; do not assume `width: 100%` is always most readable.
- If the diagram becomes unreadable, change direction, shorten labels, group content, or split it before increasing export resolution.
- Keep critical technical terms deterministic and searchable in surrounding text.

## Compatibility checks

- Native Mermaid support may lag behind the current release.
- Avoid new syntax when the destination version is unknown.
- For platforms without Mermaid support, export an image and retain the source beside the article or documentation file.
- Re-render after any source edit. Do not publish an asset generated from an older revision.
