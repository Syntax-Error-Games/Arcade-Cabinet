#!/bin/bash

# Add games to Arcade-Cabinet repo
# Run this from your Arcade-Cabinet directory

set -e

OWNER="Syntax-Error-Games"  # Change this to your GitHub username
GAMES=(
  # Classic arcade games
  "asteroids"
  "breakout"
  "centipede"
  "computer-space"
  "defender"
  "galaxian"
  "gun-fight"
  "lunar-lander"
  "missile-command"
  "pac-man"
  "pong"
  "space-invaders"
  
  # Other games
  "crossy-farm-car"
  "flappy-bird"
  "mario-1-1"
  "mario-kart-snow"
  "robot-tennis"
  "subway-runner"
  "terraria-sandbox"
  "voxel-gta-city"
)

echo "🎮 Cloning game repos into /games..."

for game in "${GAMES[@]}"; do
  if [ -d "games/$game" ]; then
    echo "   ✓ $game already exists, skipping clone"
  else
    echo "   📥 Cloning $game..."
    git clone "https://github.com/$OWNER/$game.git" "games/$game" 2>/dev/null || echo "   ⚠️  Could not clone $game (repo may not exist or be private)"
  fi
done

echo ""
echo "✅ Cloning complete!"
echo ""
echo "📝 Next step: Update index.html manually OR use the Node script below."
echo ""
echo "To auto-update index.html, create a file called 'update-index.js' with the code shown below,"
echo "then run: node update-index.js"
echo ""
