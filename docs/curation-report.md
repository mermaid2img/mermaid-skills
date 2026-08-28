# Initial curation report

## Selection method

The first release was distilled from repeated Mermaid work across a production editor, technical publishing workflows, architecture documentation, and render-driven review. Candidates were kept only when they had a distinct trigger, reusable decisions, an observable definition of done, and enough value beyond general prompting advice.

Community popularity was treated as discovery evidence, not a quality guarantee. Real workflow fit, maintained source, scoped behavior, and forward testing carry more weight than repository stars alone.

## Kept

| Skill | Why it earned a separate place |
| --- | --- |
| `mermaid-diagram-builder` | Captures the semantic work of choosing a diagram grammar and extracting only supported entities and relationships. |
| `mermaid-architecture-review` | Adds architecture-specific evidence levels, ownership, trust, permission, failure, and observability checks that a general builder should not impose on every diagram. |
| `mermaid-preview-refinement` | Encodes the proven render-inspect-refine loop and makes target-viewport readability an explicit completion criterion. |
| `mermaid-publishing` | Covers the distinct final-mile decision of whether Mermaid is appropriate and how to export, synchronize, and inspect an asset for its destination. |

## Merged into the four skills

- Diagram-type selection, prompt constraints, incremental generation, and parser-error recovery were consolidated into `mermaid-diagram-builder`.
- Mobile direction changes, label shortening, node grouping, declaration reordering, and before/after comparison were consolidated into `mermaid-preview-refinement`.
- PNG/SVG/PDF selection, source-to-asset revision consistency, actual-width inspection, and the choice between Mermaid, screenshots, concept images, and information graphics were consolidated into `mermaid-publishing`.
- Agent-system boundaries, tool permissions, human approval, data ownership, retries, and terminal failures were consolidated into `mermaid-architecture-review`.

## Not included

- General visual-design and frontend-style skills are useful in their own domain but do not provide an independently testable Mermaid workflow.
- Generic output-length enforcement does not improve diagram semantics, rendering, or publishing quality.
- Near-duplicate Mermaid rendering skills were not copied when their main scenario was already covered by the render-inspect-refine workflow.
- Narrow one-off prompts were omitted when their useful parts could be expressed as a rule or reference inside a broader recurring workflow.

The result is intentionally small. A new skill should be added only when improving one of these four would create a confused trigger, incompatible output, or meaningfully different success criteria.
