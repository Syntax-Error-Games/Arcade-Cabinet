#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const INDEX_FILE = 'index.html';

// Map each game to a cabinet ID and its display title
const GAME_MAPPING = {
  // Classic arcade games → new ARCADE cabinet
  'asteroids': { cabinet: 'arcade', title: 'Asteroids' },
  'breakout': { cabinet: 'arcade', title: 'Breakout' },
  'centipede': { cabinet: 'arcade', title: 'Centipede' },
  'computer-space': { cabinet: 'arcade', title: 'Computer Space' },
  'defender': { cabinet: 'arcade', title: 'Defender' },
  'galaxian': { cabinet: 'arcade', title: 'Galaxian' },
  'gun-fight': { cabinet: 'arcade', title: 'Gun Fight' },
  'lunar-lander': { cabinet: 'arcade', title: 'Lunar Lander' },
  'missile-command': { cabinet: 'arcade', title: 'Missile Command' },
  'pac-man': { cabinet: 'arcade', title: 'Pac-Man' },
  'pong': { cabinet: 'arcade', title: 'Pong' },
  'space-invaders': { cabinet: 'arcade', title: 'Space Invaders' },
  
  // Existing games
  'crossy-farm-car': { cabinet: 'adventure', title: 'Crossy Farm' },
  'flappy-bird': { cabinet: 'adventure', title: 'Flappy Bird' },
  'mario-1-1': { cabinet: 'adventure', title: 'Mario 1-1' },
  'mario-kart-snow': { cabinet: 'racing', title: 'Mario Kart Snow' },
  'robot-tennis': { cabinet: 'toybox', title: 'Robot Tennis' },
  'subway-runner': { cabinet: 'adventure', title: 'Subway Runner' },
  'terraria-sandbox': { cabinet: 'sandbox', title: 'Terraria Sandbox' },
  'voxel-gta-city': { cabinet: 'sandbox', title: 'Voxel GTA City' },
};

console.log('📖 Reading index.html...');
let html = fs.readFileSync(INDEX_FILE, 'utf8');

// Check if ARCADE cabinet already exists
if (!html.includes("id:'arcade'")) {
  console.log('➕ Adding new ARCADE cabinet...');
  
  // Find the CABINETS array opening and insert the arcade cabinet near the beginning
  const arcadeCabinet = `    {
      id:'arcade', title:'ARCADE', tagline:'PIXEL PERFECT CLASSICS',
      accent:0xffe600, x:-3.45, z:3.8, rotY:0, where:'FRONT LEFT',
      games:[]
    },\n`;
  
  // Insert after "const CABINETS = ["
  html = html.replace('const CABINETS = [', 'const CABINETS = [\n' + arcadeCabinet);
}

// Parse out the CABINETS array to add games
const cabinetRegex = /\{[\s\S]*?id:'([^']+)'[\s\S]*?games:\[([\s\S]*?)\]\s*\}/g;
let match;
const cabinetsByID = {};

// First pass: extract existing cabinets
while ((match = cabinetRegex.exec(html)) !== null) {
  const id = match[1];
  const gamesStr = match[2];
  
  // Parse existing games
  const gameRegex = /\{\s*title:\s*"([^"]+)",\s*file:\s*"([^"]+)"[^}]*\}/g;
  const games = [];
  let gameMatch;
  while ((gameMatch = gameRegex.exec(gamesStr)) !== null) {
    games.push({
      title: gameMatch[1],
      file: gameMatch[2]
    });
  }
  cabinetsByID[id] = games;
}

// Second pass: add new games to appropriate cabinets
for (const [gameDir, gameInfo] of Object.entries(GAME_MAPPING)) {
  const gameFile = `games/${gameDir}/index.html`;
  const cabinetID = gameInfo.cabinet;
  const gameTitle = gameInfo.title;
  
  // Check if this game already exists in this cabinet
  const cabinet = cabinetsByID[cabinetID] || [];
  const alreadyExists = cabinet.some(g => g.file === gameFile);
  
  if (alreadyExists) {
    console.log(`   ℹ️  ${gameTitle} already in ${cabinetID}, skipping`);
  } else {
    console.log(`   ✅ Adding ${gameTitle} to ${cabinetID}`);
    if (!cabinetsByID[cabinetID]) cabinetsByID[cabinetID] = [];
    cabinetsByID[cabinetID].push({
      title: gameTitle,
      file: gameFile
    });
  }
}

// Third pass: rebuild the games arrays in the HTML
for (const [cabinetID, games] of Object.entries(cabinetsByID)) {
  const gamesArr = games
    .map(g => `        { title: "${g.title.replace(/"/g, '\\"')}", file: "${g.file}" }`)
    .join(',\n');
  
  const newGamesStr = `\n${gamesArr}\n      `;
  
  // Find and replace the games array for this cabinet
  const pattern = new RegExp(
    `(id:'${cabinetID}'[^}]*?games:\\[)[^\\]]*?(\\])`
  );
  html = html.replace(pattern, `$1${newGamesStr}$2`);
}

console.log('');
console.log('💾 Writing updated index.html...');
fs.writeFileSync(INDEX_FILE, html, 'utf8');

console.log('');
console.log('✨ Done! Your arcade now has all the games.');
console.log('');
console.log('Next steps:');
console.log('  1. Review the changes: git diff index.html');
console.log('  2. Commit: git add -A && git commit -m "Add games to arcade"');
console.log('  3. Push: git push origin main');
console.log('');
