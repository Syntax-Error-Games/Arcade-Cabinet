# World 1-1

| | |
| --- | --- |
| Slug | `mario-1-1` |
| Model | `claude-fable-5-1` |
| Generated | 2026-09-02T07:24:38Z (UTC) |
| Harness | claude -p --model claude-fable-5-1 (non-interactive, single turn, no follow-up; no reasoning-effort knob) |
| Command | `cd work && claude -p --model claude-fable-5-1 --output-format json --dangerously-skip-permissions < ../prompt.md` |
| Session | 44 turns, about 51 min, single prompt, no follow-up |
| Source run | `agent-arena/runs/mario-1-1--20260902-152438/claude__claude-fable-5-1__default__en` |
| index.html sha256 | `815234b6f251ed816f83d7d4c54683e6ebf6ef164d90732168b4b0fe335c9db8` |

Play: https://sorrycc.github.io/fable-arcade/games/mario-1-1/

The file is committed exactly as the model wrote it. External resources it references:

- none

## Prompt

```text
Create a stage identical to Super Mario Bros. World 1-1.

It must be playable and bug-free. It should be fun.

Write the result to `index.html` in the current working directory: a single
self-contained HTML file with inline CSS and JS, no external resources.
```
