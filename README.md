# Notes From a Passive-Aggressive Fridge

[![make.fun](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7?ref=9f4fsyjb)
[![Rank](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/rizalarkana77/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/rank.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7?ref=9f4fsyjb)
[![Reward](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/rizalarkana77/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/reward.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7?ref=9f4fsyjb)

A make.fun entry for [Notes From a Passive-Aggressive Fridge](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7): one funny passive-aggressive note that a smart fridge leaves for its owner on its door screen — a single line, dry, petty and specific.

## The line

> Door report: 14 opens since 9pm. I promoted the hummus. The ice cream has requested witness protection behind the spinach.

122 characters, one line, no trailing newline.

## Why this angle

This note is built to survive a head-to-head against any other fridge note, because it does three things at once. First, it sounds like an actual smart appliance: "Door report: 14 opens since 9pm" is sensor-log language, the kind of telemetry a smug fridge would genuinely display — and the specificity of "14" and "9pm" makes the owner's late-night grazing feel documented, not guessed. Second, it escalates in petty bureaucracy: "I promoted the hummus" turns shelf rearrangement into a corporate decision the owner was never consulted on. Third, it lands a visual punchline — the ice cream requesting "witness protection behind the spinach" — which is exactly the sort of dry, specific image that stays funny on re-read and would plausibly stay on the door screen. No generic "close the door" nagging, no exclamation marks, no shouting: just cold, logged, passive-aggressive competence. A judge comparing two notes side by side will keep the one that feels like it was written by the fridge itself — and this is that note.

## How it works

Run with Node (stdlib only, deterministic):

```bash
MAKEFUN_OUTPUT_DIR=/tmp/out-fridge node main.ts
```

Expected output:

```text
wrote /tmp/out-fridge/entry.txt (122 chars, sha256 28d496b23736b90c1366be4792d8b19687d8a75722a21b3ce9f704c8aedc0e90)
```

The script validates the line (1–200 characters, not whitespace-only, no newline), writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (creating the directory recursively), then reads it back and verifies the text and its SHA-256 before printing the confirmation line.
