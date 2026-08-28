import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const skillsRoot = join(root, "skills");
const errors = [];
const skillNames = readdirSync(skillsRoot).filter((entry) =>
  statSync(join(skillsRoot, entry)).isDirectory(),
);

if (skillNames.length === 0) errors.push("No skills found.");

for (const directoryName of skillNames) {
  const skillRoot = join(skillsRoot, directoryName);
  const skillPath = join(skillRoot, "SKILL.md");
  const agentPath = join(skillRoot, "agents", "openai.yaml");

  if (!existsSync(skillPath)) {
    errors.push(`${directoryName}: missing SKILL.md`);
    continue;
  }
  if (!existsSync(agentPath)) {
    errors.push(`${directoryName}: missing agents/openai.yaml`);
    continue;
  }

  const skill = readFileSync(skillPath, "utf8");
  const agent = readFileSync(agentPath, "utf8");
  const frontmatter = skill.match(/^---\n([\s\S]*?)\n---/);
  const name = frontmatter?.[1].match(/^name:\s*(.+)$/m)?.[1].trim();
  const description = frontmatter?.[1].match(/^description:\s*(.+)$/m)?.[1].trim();

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(directoryName)) {
    errors.push(`${directoryName}: directory must use lowercase hyphen-case`);
  }
  if (name !== directoryName) {
    errors.push(`${directoryName}: frontmatter name does not match directory`);
  }
  if (!description || description.length < 80) {
    errors.push(`${directoryName}: description is missing or too vague`);
  }
  if (!description?.includes("Use ")) {
    errors.push(`${directoryName}: description must state when to use the skill`);
  }
  if (!agent.includes(`$${directoryName}`)) {
    errors.push(`${directoryName}: default prompt must invoke $${directoryName}`);
  }
  if (/\b(?:TODO|FIXME|TBD|placeholder)\b/i.test(`${skill}\n${agent}`)) {
    errors.push(`${directoryName}: unfinished placeholder found`);
  }

  for (const match of skill.matchAll(/\[[^\]]+\]\(([^)]+\.md)\)/g)) {
    const referencedPath = join(skillRoot, match[1]);
    if (!existsSync(referencedPath)) {
      errors.push(`${directoryName}: missing reference ${relative(root, referencedPath)}`);
    }
  }
}

if (errors.length > 0) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log(`Validated ${skillNames.length} skills: ${skillNames.join(", ")}`);
