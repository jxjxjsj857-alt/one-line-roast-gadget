import { mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";

const ROAST =
  "My smartwatch tracks my sleep, my steps, and my stress, then reports I'm tired, sedentary, and tense — thanks, I live here.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;
const MAX_CHARS = 200;

function fail(message: string): never {
  throw new Error(`roast check failed: ${message}`);
}

function checkRoast(line: string): void {
  if (line.trim().length === 0) {
    fail("the roast is empty or only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    fail("the roast must be a single line");
  }
  if (line !== line.trim()) {
    fail("the roast has leading or trailing whitespace");
  }
  const chars = [...line];
  if (chars.length > MAX_CHARS) {
    fail(`the roast is ${chars.length} characters, over the ${MAX_CHARS} limit`);
  }
  const words = line.trim().split(/\s+/);
  if (words.length < 3) {
    fail(`the roast has only ${words.length} word(s); a roast needs at least 3 words`);
  }
}

function main(): void {
  checkRoast(ROAST);

  const charCount = [...ROAST].length;
  const lineCount = ROAST.split("\n").length;
  if (lineCount !== 1) {
    fail(`expected exactly 1 line, found ${lineCount}`);
  }

  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, ROAST, "utf8");

  const written = readFileSync(OUT_FILE, "utf8");
  if (written !== ROAST) {
    fail("the file on disk does not match the roast");
  }
  const bytes = statSync(OUT_FILE).size;
  if (bytes === 0) {
    fail("the output file is empty");
  }

  console.log(`roast OK: ${charCount} characters, ${bytes} bytes -> ${OUT_FILE}`);
}

main();
