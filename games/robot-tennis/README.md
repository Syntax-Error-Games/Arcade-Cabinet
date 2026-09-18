# Robo Tennis

| | |
| --- | --- |
| Slug | `robot-tennis` |
| Model | `claude-fable-5-1` |
| Generated | 2026-09-03T02:21:24Z (UTC) |
| Harness | claude -p --model claude-fable-5-1 (non-interactive, single turn, no follow-up; no reasoning-effort knob) |
| Command | `cd work && claude -p --model claude-fable-5-1 --output-format json --dangerously-skip-permissions < ../prompt.md` |
| Session | 39 turns, about 42 min, single prompt, no follow-up |
| Source run | `agent-arena/runs/robot-tennis--20260903-000244/claude__claude-fable-5-1__default__en` |
| index.html sha256 | `ad77791b18ef5d9f1dec2e06ac5447143a0276458c42a7c2888a163fb1f88c43` |

Play: https://sorrycc.github.io/fable-arcade/games/robot-tennis/

The file is committed exactly as the model wrote it. External resources it references:

- `https://unpkg.com/three@0.169.0/build/three.module.js`

## Prompt

```text
Build a single HTML file with Three.js: a third-person robot tennis game, you vs
a CPU, camera behind your player.

Must have
- Low-poly pastel court: coral-red surface with white lines, mint green apron,
  stepped bleachers in pink and blue, a few blocky trees. Flat shading, soft
  shadows.
- A chunky round-headed robot holding a racket. It picks a swing by where the
  ball is: forehand, backhand, overhead smash, and a serve with a toss. The
  swing must read as motion, not a pose swap.
- A ring on the ground showing where the ball will land, and a CPU robot on the
  far side that chases it.
- Real tennis scoring (15/30/40, deuce, games, sets) on a top-center
  scoreboard, plus a big mid-screen call when a point ends: OUT, MISSED, INTO
  THE NET, FAULT / second serve.
- Controls: WASD move, Shift sprint, Space or click to swing, hold a direction
  while swinging to aim.

Rules
- Ball has gravity and bounce and never passes through the net or racket.
- The CPU can hold a rally of several shots but misses sometimes.
- Serve alternates each game; a serve into the wrong box is a fault.
- 60 fps, no pops when animations change.

Style, colors, props, and everything else are up to you. Make it feel alive.

Write the result to `index.html` in the current working directory: one HTML
file that runs as-is. The only external resource permitted is Three.js itself,
a version-pinned module from a CDN (e.g.
`https://unpkg.com/three@0.169.0/build/three.module.js`) loaded via an import
map; all of your own CSS and JS stays inline. No build step, no local asset
files.
```
