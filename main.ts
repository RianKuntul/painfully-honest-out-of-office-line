// The Painfully Honest Out-of-Office — make.fun entry (painfully-honest-out-of-office-line).
// Writes exactly one original out-of-office auto-reply, painfully honest
// about the sender's absence and inbox but still polite enough to stand,
// to $MAKEFUN_OUTPUT_DIR/entry.txt (or ./output/entry.txt when unset).
// Deterministic: fixed string, no network, no randomness, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm out of the office this week and, honestly, I plan to enjoy every minute of not thinking about email — I'll read your message when I'm back and reply like someone who actually missed you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
