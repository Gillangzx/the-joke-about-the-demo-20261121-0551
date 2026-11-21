// Entry for make.fun — the joke about the demo.
// Writes one joke about working beside an AI coding agent to entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My agent hit the crash on stage, said \u201cthis is the failure case,\u201d and clicked to a slide for it \u2014 the bug got applause, the feature never got a slide.";

// Output guard: the entry is one joke, so fail loudly instead of
// shipping a blank, whitespace-only, or over-long file.
const codePoints = [...JOKE].length;
if (JOKE.length === 0) {
  console.error("error: joke is empty, refusing to write entry.txt");
  process.exit(1);
}
if (JOKE.trim().length === 0) {
  console.error("error: joke is whitespace-only, refusing to write entry.txt");
  process.exit(1);
}
if (codePoints < 1 || codePoints > 280) {
  console.error(
    `error: joke is ${codePoints} code points, must be 1-280, refusing to write entry.txt`,
  );
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${[...JOKE].length} chars)`);
