// Roast entry for make.fun's "One-Line Roast: The Gadget You Use Every Day"
// bounty. Writes one single-line roast (123 characters) to
// /output/entry.txt. Node 22, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";

// The roast: a smartwatch that tracks everything and still delivers the
// most useless verdict possible — it lives on your wrist and reports back
// like a smug roommate who noticed nothing new.
const ROAST =
  "My smartwatch tracks my sleep, my steps, and my stress, then reports I'm tired, sedentary, and tense — thanks, I live here.";

// Length guard: the bounty requires one line of 1-200 characters.
// Fail loudly instead of writing an out-of-spec entry.
const MAX_ROAST_LENGTH = 200;
if (
  ROAST.trim().length < 1 ||
  ROAST.length > MAX_ROAST_LENGTH ||
  /[\r\n]/.test(ROAST)
) {
  throw new Error(
    `Roast must be a single line of 1-${MAX_ROAST_LENGTH} characters, got ${ROAST.length} characters.`,
  );
}

let outPath = "/output/entry.txt";
try {
  mkdirSync("/output", { recursive: true });
  writeFileSync(outPath, ROAST, "utf8");
} catch {
  // Sandbox without a writable /output: write beside the program.
  mkdirSync("output", { recursive: true });
  outPath = "output/entry.txt";
  writeFileSync(outPath, ROAST, "utf8");
}
console.log(`Wrote ${ROAST.length} characters to ${outPath}`);
