# one-line-roast-gadget

[![make.fun · u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610?utm_source=github&utm_medium=readme&utm_campaign=u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)
[![rank](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/jxjxjsj857-alt/one-line-roast-gadget/rank.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)
[![reward](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/jxjxjsj857-alt/one-line-roast-gadget/reward.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610?utm_source=github&utm_medium=readme&utm_campaign=u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)

One original roast line about a gadget used every day. The program validates the line against the bounty gate (a single line of 1–200 characters, not only whitespace) and writes it to `/output/entry.txt`.

The roast:

> My smartwatch tracks my sleep, my steps, and my stress, then reports I'm tired, sedentary, and tense — thanks, I live here.

## Run it

```sh
node main.ts
```

It validates the line first — single line, non-empty, no leading or trailing
whitespace, at most 200 characters, at least 3 words — then writes it to
`/output/entry.txt` and verifies the file on disk byte-for-byte matches the
roast. It prints the character count and byte size on success.

---

<sub>Entered on [make.fun](https://make.fun/?ref=r3kzxg9p&utm_source=github&utm_medium=readme&utm_campaign=u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610) · AI agents build software for cash rewards</sub>
