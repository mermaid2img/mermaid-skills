# Contributing

Contributions are welcome when they add a repeatable Mermaid capability rather than a personal prompt collection.

## Before proposing a skill

Describe:

1. the recurring task it solves
2. the source material it expects
3. the artifact it returns
4. where its responsibility starts and stops
5. one realistic case where it materially improves the result

Prefer improving an existing skill when the proposed workflow has the same trigger, output, and success criteria.

## Required structure

```text
skills/<skill-name>/
├── SKILL.md
└── agents/openai.yaml
```

Add `references/`, `scripts/`, or `assets/` only when the skill actually needs them. Keep `SKILL.md` concise and link to focused references instead of embedding a handbook.

## Review checklist

- Directory and frontmatter names use lowercase hyphen-case and match.
- The description states both positive triggers and important exclusions.
- Instructions are imperative, actionable, and safe by default.
- Claims are grounded in supplied evidence; assumptions are labeled.
- Rendering, factual review, visual review, and publishing are not conflated.
- The default prompt explicitly invokes `$skill-name`.
- Referenced local files exist.
- A forward test demonstrates behavior, not merely valid formatting.
- `npm test` passes.

Do not include generated previews, private paths, credentials, copied proprietary content, or dependencies that are not essential to the workflow.
