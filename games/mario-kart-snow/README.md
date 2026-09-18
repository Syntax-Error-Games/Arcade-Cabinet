# Frostline Kart

| | |
| --- | --- |
| Slug | `mario-kart-snow` |
| Model | `claude-fable-5-1` |
| Generated | 2026-09-02T14:34:05Z (UTC) |
| Harness | claude -p --model claude-fable-5-1 (non-interactive, single turn, no follow-up; no reasoning-effort knob) |
| Command | `cd work && claude -p --model claude-fable-5-1 --output-format json --dangerously-skip-permissions < ../prompt.md` |
| Session | 29 turns, about 43 min, single prompt, no follow-up |
| Source run | `agent-arena/runs/mario-kart-snow--20260902-223405/claude__claude-fable-5-1__default__en` |
| index.html sha256 | `b5fac1d4da8e978abb181bc433f36c177be0c05b231cad1163d139db295476e4` |

Play: https://sorrycc.github.io/fable-arcade/games/mario-kart-snow/

The file is committed exactly as the model wrote it. External resources it references:

- `https://unpkg.com/three@0.169.0/build/three.module.js`

## Prompt

```text
Build a browser Mario Kart clone with Three.js: low-poly, 8 karts, chase camera,
3 laps on a snowy circuit.

Must have
- A dense scene: closed-loop track with blue-and-white curbs, a checkered
  start/finish gantry with lights, grandstands full of blocky colored crowd,
  snow scenery (pines, snowmen, mountains, aurora, a balloon or two).
- A full HUD: item slot top-left, LAP x/3 and race timer top-right, big position
  ("5th") bottom-left, speedometer arc bottom-center that turns orange on boost,
  minimap bottom-right with a dot per kart.
- Race events that keep firing: 3-2-1-GO countdown, boost off the line, mushroom
  pickups, item hits with a screen flash and spin-out, a green "▲ 6TH" / red
  "▼ 7TH" toast on every position change, results after lap 3.

Rules
- 7 AI karts that race a waypoint racing line, not the road centerline, and
  jostle for position. Items hit them too.
- Checkpoints so laps and positions can't be cheated by cutting the track.
- Keyboard: arrows/WASD to drive, one key to use the item.
- Smooth with 8 karts on screen, no clipping through walls or each other.

Style, colors, kart shapes, and everything else are up to you. Make it feel
alive.

Write the result to `index.html` in the current working directory: one HTML
file that runs as-is. The only external resource permitted is Three.js itself,
a version-pinned module from a CDN (e.g.
`https://unpkg.com/three@0.169.0/build/three.module.js`) loaded via an import
map; all of your own CSS and JS stays inline. No build step, no local asset
files.
```
