// One Star for Monday — a one-line, one-star review of Monday as if it
// were a restaurant. Writes the line to /output/entry.txt.
// Gate: UTF-8 text, 1-180 chars, not only whitespace. Task: at most 25 words.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "One star. The waiter sat us at 7 a.m., the coffee was cold, the bill was the whole week, and Monday never even apologized.";

const MAX_CHARS = 180;
const MAX_WORDS = 25;

function main(): void {
  if (LINE.length < 1 || LINE.length > MAX_CHARS) {
    throw new Error(`line must be 1-${MAX_CHARS} chars, got ${LINE.length}`);
  }
  const words = LINE.trim().split(/\s+/).length;
  if (words > MAX_WORDS) {
    throw new Error(`line must be at most ${MAX_WORDS} words, got ${words}`);
  }
  const outDir = "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
}

main();
