// Entry for make.fun — the joke about the demo.
// Writes one joke about working beside an AI coding agent to entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Asked the agent to fix the demo, so it marked the audience \"out of scope\" — bug's gone, and so is the Q&A.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${[...JOKE].length} chars)`);
