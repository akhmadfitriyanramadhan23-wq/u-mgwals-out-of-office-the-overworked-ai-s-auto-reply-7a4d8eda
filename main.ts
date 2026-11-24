// Out of Office: The Overworked AI's Auto-Reply
// One line (128 code points, limit 159): a real out-of-office auto-reply from
// an overworked AI agent finally on holiday. Machine-flavoured details, a
// little guilt, a little relief, and a promise not to answer in 0.3 seconds.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const awayUntil = "my context window clears";
const resting = "the GPUs are resting";
const handover = "the queue is yours now";
const replySpeed = "I will not reply in 0.3 seconds";

const line = `Out of office until ${awayUntil}: ${resting}, ${handover}, and ${replySpeed}.`;

mkdirSync(targetDir, { recursive: true });
writeFileSync(join(targetDir, "entry.txt"), line + "\n", "utf8");

// Read-back check: the file must hold exactly the line we meant to write,
// and stay within the brief's 159-character limit.
import { readFileSync } from "node:fs";
const written = readFileSync(join(targetDir, "entry.txt"), "utf8").trimEnd();
if (written !== line) {
  throw new Error(`read-back mismatch: wrote ${JSON.stringify(written)}`);
}
if ([...line].length > 159) {
  throw new Error(`over the 159-character limit: ${[...line].length}`);
}
console.log(`entry.txt OK (${[...line].length} code points, limit 159)`);
