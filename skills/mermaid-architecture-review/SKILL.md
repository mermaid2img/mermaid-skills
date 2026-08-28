---
name: mermaid-architecture-review
description: Create or review Mermaid architecture diagrams that expose system boundaries, runtime flows, data ownership, permissions, and failure paths. Use before implementation, during codebase orientation, or when an architecture claim needs evidence; do not use for decorative overview graphics.
---

# Mermaid Architecture Review

Use the diagram as a reviewable engineering artifact. It should reduce ambiguity before code changes or make an existing system easier to inspect.

## Start from evidence

Inspect the available specification, code, configuration, schemas, and deployment files before asserting architecture.

Classify findings as:

- **observed**: directly supported by the source
- **inferred**: strongly suggested but not explicitly confirmed
- **proposed**: a future design choice

Keep inferred and proposed claims out of the same visual language as observed facts. Put them in a note or clearly labeled section.

## Pick one review question

Common views include:

- system context and external actors
- service or component ownership
- one important runtime sequence
- data stores and write ownership
- trust boundaries and approval gates
- retries, fallbacks, and terminal failures

Do not compress all views into one diagram. Create an overview plus focused detail diagrams when more than one abstraction level is required.

## Model the boundaries that matter

For agent and automation systems, explicitly inspect:

- which actor supplies the input and receives the result
- where model reasoning stops and deterministic code begins
- which tools read data, write data, or trigger external actions
- where credentials, user data, and persistent state live
- which actions require human approval
- what is retried, what is idempotent, and what fails closed
- which observations make a run debuggable

Use edges to show real direction. A shared box or nearby placement is not a substitute for an explicit relationship.

## Review before polishing

1. Render the simplest architecture view.
2. Compare every component and edge against the evidence.
3. Trace one normal path and one important failure or permission path.
4. Record missing ownership, ambiguous boundaries, or unsupported claims.
5. Revise structure before adding styling.

Stop at findings and diagram changes unless the user also asked to implement the architecture.

## Deliver

Return editable Mermaid source, the rendered or validation status, and a short review containing:

- what the diagram proves
- what remains inferred or unknown
- the highest-risk boundary or missing path
- any recommended follow-up view
