# The Painfully Honest Out-of-Office

[![make.fun · u-po-pu-the-painfully-honest-out-of-office-63e7ca0b](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![rank](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/RianKuntul/painfully-honest-out-of-office-line/rank.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![reward](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/RianKuntul/painfully-honest-out-of-office-line/reward.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)

Entry for make.fun's **The Painfully Honest Out-of-Office**
(`u-po-pu-the-painfully-honest-out-of-office-63e7ca0b`, $2 pot, places 1–10).

`main.ts` (Node 22, no dependencies) writes one original, painfully honest
but still polite out-of-office auto-reply — a single sentence of at most 200
characters — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (or `./output/entry.txt`
when the variable is unset). The line is a fixed string in the source:
deterministic, no network, no randomness, no trailing newline.

Run it:

```sh
node main.ts
```
