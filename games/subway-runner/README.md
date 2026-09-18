# Rail Rush

| | |
| --- | --- |
| Slug | `subway-runner` |
| Model | `claude-fable-5-1` |
| Generated | 2026-09-02T12:01:56Z (UTC) |
| Harness | claude -p --model claude-fable-5-1 (non-interactive, single turn, no follow-up; no reasoning-effort knob) |
| Command | `cd work && claude -p --model claude-fable-5-1 --output-format json --dangerously-skip-permissions < ../prompt.md` |
| Session | 27 turns, about 45 min, single prompt, no follow-up |
| Source run | `agent-arena/runs/subway-runner--20260902-200156/claude__claude-fable-5-1__default__en` |
| index.html sha256 | `e87d45df27254a738af6f235380980f1882f30894c6775d3432065ce63999b78` |

Play: https://sorrycc.github.io/fable-arcade/games/subway-runner/

The file is committed exactly as the model wrote it. External resources it references:

- `https://unpkg.com/three@0.169.0/build/three.module.js`

## Prompt

```text
Build a single HTML file with Three.js: a Subway Surfers style endless runner,
low-poly, blocky character, chase camera from behind.

Must have

- Three lanes between two walls. Lane switch slides, jump and roll animate, and
  the run speeds up the longer you survive.
- Trains you can land on and run along the roof of, plus low barriers to jump
  and gantries to duck. Coins in lines and arcs.
- Power-ups that change how it plays: 2x score, jetpack (lift high above the
  track, camera follows, fly over everything for a few seconds), super sneakers
  (high jump), hoverboard on double-space that absorbs one crash.
- HUD: score ticking with distance, coin count, a record saved between runs,
  active power-ups shown as draining timer bars, a small pill saying what the
  hoverboard key is.
- Crash ends the run and a restart is one key press.

Rules

- Arrow keys or WASD, space to jump. Runs at 60 fps.
- Track is built from recycled chunks, so a long run never grows memory.
- Landing on a train roof is a real surface, no sinking into it, no clipping
  through the sides.
- Game over shows the score and record over a dimmed frame.

Style, colors, props, and everything else are up to you. Make it feel alive.

Write the result to `index.html` in the current working directory: one HTML
file that runs as-is. The only external resource permitted is Three.js itself,
a version-pinned module from a CDN (e.g.
`https://unpkg.com/three@0.169.0/build/three.module.js`) loaded via an import
map; all of your own CSS and JS stays inline. No build step, no local asset
files.
```
