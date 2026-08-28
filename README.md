# Mermaid Skills

Practical, reusable skills for creating Mermaid diagrams that are correct, readable, and ready for real publishing workflows.

This repository favors small skills with clear boundaries over one large prompt that tries to handle every Mermaid task. Each included skill has been reviewed against real use cases and must explain both when to use it and when not to use it.

## Skills

| Skill | One-line value | Install |
| --- | --- | --- |
| [`mermaid-diagram-builder`](skills/mermaid-diagram-builder) | Turns requirements, prose, or code into a focused, evidence-backed Mermaid diagram. | `npx skills add mermaid2img/mermaid-skills --skill mermaid-diagram-builder` |
| [`mermaid-architecture-review`](skills/mermaid-architecture-review) | Makes system boundaries, ownership, permissions, and failure paths reviewable before implementation. | `npx skills add mermaid2img/mermaid-skills --skill mermaid-architecture-review` |
| [`mermaid-preview-refinement`](skills/mermaid-preview-refinement) | Uses a render-inspect-refine loop to fix diagrams that are valid but visually weak. | `npx skills add mermaid2img/mermaid-skills --skill mermaid-preview-refinement` |
| [`mermaid-publishing`](skills/mermaid-publishing) | Chooses and verifies the right Mermaid export for docs, mobile articles, presentations, and print. | `npx skills add mermaid2img/mermaid-skills --skill mermaid-publishing` |

Install the complete collection:

```bash
npx skills add mermaid2img/mermaid-skills
```

## Quality bar

Every skill in this repository must:

- solve a recurring Mermaid task with a distinct trigger and stopping point
- include negative boundaries so it does not hijack adjacent work
- prefer source-backed structure over invented completeness
- distinguish syntax validation from factual and visual validation
- preserve editable Mermaid source
- avoid hidden package installation, remote execution, or publishing actions
- pass the repository checks and a realistic forward test

See [the curation report](docs/curation-report.md) for the initial selection rationale and [the validation report](docs/validation-report.md) for tested scenarios.

## Validate locally

```bash
npm test
```

The repository check verifies metadata, installable directory structure, referenced local Markdown files, invocation prompts, and unfinished placeholders. Rendering and visual review remain scenario-based checks because their value depends on the target viewport.

## License

[MIT](LICENSE)
