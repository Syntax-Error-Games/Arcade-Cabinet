# Hollowmere

| | |
| --- | --- |
| Slug | `terraria-sandbox` |
| Model | `claude-fable-5-1` |
| Generated | 2026-09-02T09:12:01Z (UTC) |
| Harness | claude -p --model claude-fable-5-1 (non-interactive, single turn, no follow-up; no reasoning-effort knob) |
| Command | `cd work && claude -p --model claude-fable-5-1 --output-format json --dangerously-skip-permissions < ../prompt.md` |
| Session | 50 turns, about 44 min, single prompt, no follow-up |
| Source run | `agent-arena/runs/terraria-sandbox--20260902-155212/claude__claude-fable-5-1__default__en` |
| index.html sha256 | `be66b313b62919218b3e1454362e5950d9b127d9a5af5bcb1b803d0618561d63` |

Play: https://sorrycc.github.io/fable-arcade/games/terraria-sandbox/

The file is committed exactly as the model wrote it. External resources it references:

- none

## Prompt

```text
Build a single HTML file (canvas, plain JS or whatever fits): a Terraria-style
2D sandbox survival game, playable start to boss kill.

Must have
- Tile world much wider than the screen: grass, dirt, stone, sand, water, trees,
  cacti. Two biomes at least (forest and desert), named in the HUD with an
  in-game clock and weather.
- Dig with a pickaxe, place blocks and walls, craft at a workbench. Inventory
  panel with hotbar, armor and accessory slots, and a crafting list that only
  shows recipes for stations nearby.
- Real day/night. Night is dark underground and on the surface; torches cast
  warm light with falloff.
- Parallax sky: clouds, distant mountains, sun and moon.
- One boss: use an item at night to summon a giant flying eye. Awakening banner,
  phased boss health bar at the bottom, small servant eyes, floating damage
  numbers.
- HUD with hearts, mana, selected item name, minimap of explored world, key hint
  bar, and a small "next discovery" tutorial card.

Rules
- Crisp pixel art, no image smoothing, 60 fps.
- Camera follows the player smoothly; physics is sub-tile, jump and fall feel
  weighty.
- Grapple hook, healing potion with cooldown, respawn on death.
- Everything runs in one file with no external assets. Draw sprites in code.

Style, palette, enemies, and everything else are up to you. Make it feel alive.

Write the result to `index.html` in the current working directory: a single
self-contained HTML file with inline CSS and JS, no external resources.
```
