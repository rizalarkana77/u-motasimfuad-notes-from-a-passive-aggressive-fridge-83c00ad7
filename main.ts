import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { createHash } from "node:crypto";

const LINE: string =
  "Door report: 14 opens since 9pm. I promoted the hummus. The ice cream has requested witness protection behind the spinach.";

function validate(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`LINE must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("LINE must not be whitespace only");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("LINE must be a single line with no newline");
  }
}

validate(LINE);

const outDir: string = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? ".");
mkdirSync(outDir, { recursive: true });
const outPath: string = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

const readBack: string = readFileSync(outPath, "utf8");
if (readBack !== LINE) {
  throw new Error("Read-back verification failed: file content differs from LINE");
}

const sha256: string = createHash("sha256").update(readBack, "utf8").digest("hex");
console.log(`wrote ${outPath} (${LINE.length} chars, sha256 ${sha256})`);
