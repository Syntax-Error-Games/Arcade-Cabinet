# Fable Theft Auto 5.1

| | |
| --- | --- |
| Slug | `voxel-gta-city` |
| Model | `claude-fable-5-1` |
| Generated | 2026-09-03T12:48:36Z (UTC) |
| Harness | claude -p --model claude-fable-5-1 (non-interactive, single turn, no follow-up; no reasoning-effort knob) |
| Command | `cd work && claude -p --model claude-fable-5-1 --output-format json --dangerously-skip-permissions < ../prompt.md` |
| Session | 54 turns, about 72 min, single prompt, no follow-up |
| Source run | `agent-arena/runs/voxel-gta-city--20260903-193607/claude__claude-fable-5-1__default__en` |
| index.html sha256 | `3015104c97f144c528132d11928514afa0e5f92fc33b72cc53976c46bb01a5e2` |

Play: https://sorrycc.github.io/fable-arcade/games/voxel-gta-city/

The file is committed exactly as the model wrote it. External resources it references:

- `https://unpkg.com/three@0.169.0/build/three.module.js`

## Prompt

```text
Build a single HTML file (Three.js from a CDN is fine): a browser GTA clone in
a blocky Minecraft-style voxel city, called "Fable Theft Auto 5.1". One
mission: whack the snitch downtown.

Must have
- A city dense enough to get lost in. Blocks of mixed buildings with parody
  storefront signs, palm trees and a Ferris wheel on the waterfront, traffic
  that keeps to its lanes, pedestrians that wander and run when shots go off.
  Named districts and streets, shown bottom-left when you cross into them.
- The whole GTA loop. Third-person WASD + mouse shooter with pistol, shotgun,
  SMG and reload. Walk up to any car, F to jack it, W/S/A/D + handbrake to
  drive, F to get out. Run over a ped and there is blood on the road.
- Wanted level. Crimes add stars, "WANTED LEVEL ★★★" flashes mid-screen, cops
  spawn and hunt you, more of them per star. Taking damage tints the screen
  red. Dying shows a big pixel "WASTED", then you respawn at the hospital.
- The mission. Title card "THE DOWNTOWN HIT" on start, a persistent top-left
  briefing ("Vinny 'Snitch' Voxel sold out the crew...") with the current
  objective, a route on the minimap, bodyguards at the plaza, cash on
  completion.
- GTA HUD in a chunky pixel font. Stars, clock, cash, health bar, weapon icon
  with ammo, kills top-right. Minimap with north arrow and player marker
  bottom-left.
- Title screen over a slow aerial pan of the city, controls listed, "click to
  play" locks the pointer.

Rules
- Everything procedural. No model files, no textures, no assets.
- 30+ fps with hundreds of buildings and dozens of cars and peds. Instance or
  merge geometry.
- Cars have weight: they accelerate, slide on handbrake, and collide with
  buildings and each other instead of passing through.

Style, colors, car and building variety, sound, and everything else are up to
you. Make it feel alive.

Write the result to `index.html` in the current working directory: one HTML
file that runs as-is. The only external resource permitted is Three.js itself,
a version-pinned module from a CDN (e.g.
`https://unpkg.com/three@0.169.0/build/three.module.js`) loaded via an import
map; all of your own CSS and JS stays inline. No build step, no local asset
files.
```
