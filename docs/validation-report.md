# Validation report

This report records behavioral acceptance tests for the initial release. A passing result requires useful decisions and a valid artifact, not only a well-formed `SKILL.md` file.

## Test matrix

| Skill | Scenario | Acceptance criteria | Status |
| --- | --- | --- | --- |
| `mermaid-diagram-builder` | Convert a password-reset requirement with success and expired-token branches into a diagram. | Chooses a flowchart, includes only supported steps, separates assumptions, and renders. | Passed |
| `mermaid-architecture-review` | Review a browser-to-renderer export path with data and permission boundaries. | Distinguishes observed and inferred facts, traces normal and failure paths, and identifies the riskiest boundary. | Passed |
| `mermaid-preview-refinement` | Improve a horizontally dense workflow for a narrow viewport. | Uses structural changes before styling, renders before and after, and removes avoidable horizontal overflow. | Passed |
| `mermaid-publishing` | Prepare a text-heavy diagram for a mobile article. | Selects an appropriate asset format, preserves source/version consistency, and inspects the exported asset at content width. | Passed |

## Results and fixes

### `mermaid-diagram-builder`

The skill selected a `flowchart` because the requirement was about decisions and dependencies rather than participant timing. The result preserved account-not-found and expired-token behavior without inventing delivery providers, token lifetimes, or authentication services. The fixture rendered successfully in Mermaid 11.16.0.

Result: retained without scope changes. See [`examples/validation/diagram-builder-password-reset.mmd`](../examples/validation/diagram-builder-password-reset.mmd).

### `mermaid-architecture-review`

The review grouped the verified editor, local renderer, preview, export, and download path inside the user device. It added the parse-error return path and kept the remote platform outside the observed local flow. The external publish edge is deliberately conditional and labeled as a user-approved action.

Result: retained. The acceptance run confirmed that permission boundaries belong in this skill instead of the general builder. See [`examples/validation/architecture-review-export-path.mmd`](../examples/validation/architecture-review-export-path.mmd).

### `mermaid-preview-refinement`

At a 390 × 844 viewport, the first `LR` draft rendered as a very wide, compressed strip with unreadable labels. The refinement changed direction to `TD`, shortened labels, and grouped evidence, practice, and curation into three phases while preserving both accept and reject outcomes. The second preview was readable at the same viewport without decorative styling.

Result: retained. The forward test directly demonstrated the skill's value. Compare [`preview-refinement-before.mmd`](../examples/validation/preview-refinement-before.mmd) and [`preview-refinement-after.mmd`](../examples/validation/preview-refinement-after.mmd).

### `mermaid-publishing`

The skill produced a narrow `TD` publishing flow, checked it at 390 × 844, preserved a source/asset revision loop, and selected PNG at 2x for a mobile article. The diagram rendered successfully and the PNG export action completed in the local editor.

Result: retained. The test also confirmed the authorization boundary: local export was exercised, but no remote draft or upload was created. See [`examples/validation/publishing-mobile.mmd`](../examples/validation/publishing-mobile.mmd).

## Automated checks

- Repository structural checks: passed for all four skills.
- Skill Creator validation: passed for all four `SKILL.md` files.
- Mermaid runtime used for forward tests: 11.16.0.
- Representative viewport: desktop editor plus 390 × 844 mobile preview.
