#!/bin/bash

# Clone games from external sources and copy them into /games/

echo "🎮 Downloading game collections..."
echo ""

# Temp folder for cloning
TEMP_DIR="_temp_games"

# Create games folder if it doesn't exist
mkdir -p games

# Clone the two sources
echo "📥 Cloning fable-arcade collection..."
git clone https://github.com/sorrycc/fable-arcade.git "$TEMP_DIR/fable-arcade" 2>/dev/null || echo "⚠️  Could not clone fable-arcade"

echo "📥 Cloning browser-games collection..."
git clone https://github.com/juliensimon/browser-games.git "$TEMP_DIR/browser-games" 2>/dev/null || echo "⚠️  Could not clone browser-games"

echo ""
echo "📂 Copying games into /games/..."

# Copy games from fable-arcade/games into our games folder
if [ -d "$TEMP_DIR/fable-arcade/games" ]; then
  echo "   ✓ Copying from fable-arcade..."
  cp -r "$TEMP_DIR/fable-arcade/games"/* games/ 2>/dev/null || echo "     Note: Some games may not have copied"
fi

# Copy games from browser-games (they're in the root)
if [ -d "$TEMP_DIR/browser-games" ]; then
  echo "   ✓ Copying from browser-games..."
  # Look for game folders (they should have index.html)
  for game_dir in "$TEMP_DIR/browser-games"/*; do
    if [ -d "$game_dir" ] && [ -f "$game_dir/index.html" ]; then
      game_name=$(basename "$game_dir")
      if [ ! -d "games/$game_name" ]; then
        cp -r "$game_dir" "games/" 2>/dev/null
        echo "     + Copied $game_name"
      fi
    fi
  done
fi

echo ""
echo "🧹 Cleaning up temporary files..."
rm -rf "$TEMP_DIR"

echo ""
echo "✅ Done! Games are now in /games/"
echo ""
echo "📝 Next: Run 'node update-index.js' to add them to your site"
echo ""
