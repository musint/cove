// Each element has a unique id, display emoji, label, tier (1-5),
// and x/y position as percentages of the island container.
// Elements unlock in array order within their tier.

export const ISLAND_ELEMENTS = [
  // Tier 1: Sessions 1-5
  { id: 'grass-1', emoji: '🌱', label: 'Grass patch', tier: 1, x: 30, y: 65 },
  { id: 'flower-1', emoji: '🌼', label: 'Daisy', tier: 1, x: 70, y: 60 },
  { id: 'rock-1', emoji: '🪨', label: 'Rock', tier: 1, x: 20, y: 55 },
  { id: 'flower-2', emoji: '🌸', label: 'Cherry blossom', tier: 1, x: 55, y: 68 },
  { id: 'grass-2', emoji: '🌿', label: 'Fern', tier: 1, x: 80, y: 58 },

  // Tier 2: Sessions 6-15
  { id: 'tree-1', emoji: '🌴', label: 'Palm tree', tier: 2, x: 15, y: 45 },
  { id: 'tree-2', emoji: '🌳', label: 'Oak tree', tier: 2, x: 85, y: 42 },
  { id: 'pond-1', emoji: '💧', label: 'Small pond', tier: 2, x: 60, y: 50 },
  { id: 'needoh-1', emoji: '🟡', label: 'Needoh Glob', tier: 2, x: 45, y: 62 },
  { id: 'flower-3', emoji: '🌺', label: 'Hibiscus', tier: 2, x: 35, y: 48 },
  { id: 'tree-3', emoji: '🎋', label: 'Bamboo', tier: 2, x: 75, y: 47 },
  { id: 'bush-1', emoji: '🌲', label: 'Pine tree', tier: 2, x: 25, y: 52 },
  { id: 'flower-4', emoji: '💐', label: 'Flower bunch', tier: 2, x: 50, y: 55 },
  { id: 'needoh-2', emoji: '🔵', label: 'Needoh Cool Cat', tier: 2, x: 68, y: 63 },
  { id: 'mushroom-1', emoji: '🍄', label: 'Mushroom', tier: 2, x: 40, y: 58 },

  // Tier 3: Sessions 16-30
  { id: 'house-1', emoji: '🏠', label: 'Cottage', tier: 3, x: 50, y: 38 },
  { id: 'garden-1', emoji: '🏡', label: 'Garden', tier: 3, x: 35, y: 42 },
  { id: 'needoh-3', emoji: '🟣', label: 'Needoh Squeeze', tier: 3, x: 62, y: 45 },
  { id: 'waterfall-1', emoji: '🌊', label: 'Waterfall', tier: 3, x: 10, y: 40 },
  { id: 'butterfly-1', emoji: '🦋', label: 'Butterflies', tier: 3, x: 55, y: 35 },
  { id: 'needoh-4', emoji: '🟢', label: 'Needoh Dohzee', tier: 3, x: 28, y: 60 },
  { id: 'fountain-1', emoji: '⛲', label: 'Fountain', tier: 3, x: 48, y: 50 },
  { id: 'bench-1', emoji: '💺', label: 'Bench', tier: 3, x: 72, y: 52 },
  { id: 'lamp-1', emoji: '🏮', label: 'Lantern', tier: 3, x: 42, y: 44 },
  { id: 'bird-1', emoji: '🐦', label: 'Songbird', tier: 3, x: 20, y: 35 },
  { id: 'needoh-5', emoji: '🟠', label: 'Needoh Teenie', tier: 3, x: 78, y: 40 },
  { id: 'tree-4', emoji: '🎄', label: 'Evergreen', tier: 3, x: 90, y: 38 },
  { id: 'flower-5', emoji: '🪻', label: 'Lavender', tier: 3, x: 65, y: 55 },
  { id: 'gnome-1', emoji: '🧑‍🌾', label: 'Garden gnome', tier: 3, x: 38, y: 65 },
  { id: 'nest-1', emoji: '🪺', label: 'Bird nest', tier: 3, x: 82, y: 35 },

  // Tier 4: Sessions 31-50
  { id: 'bridge-1', emoji: '🌉', label: 'Bridge', tier: 4, x: 50, y: 30 },
  { id: 'lighthouse-1', emoji: '🗼', label: 'Lighthouse', tier: 4, x: 90, y: 25 },
  { id: 'dock-1', emoji: '⛵', label: 'Dock & sailboat', tier: 4, x: 5, y: 55 },
  { id: 'needoh-6', emoji: '🔴', label: 'Needoh Mega', tier: 4, x: 30, y: 32 },
  { id: 'windmill-1', emoji: '🏗️', label: 'Windmill', tier: 4, x: 70, y: 28 },
  { id: 'rainbow-1', emoji: '🌈', label: 'Rainbow', tier: 4, x: 50, y: 15 },
  { id: 'castle-1', emoji: '🏰', label: 'Castle tower', tier: 4, x: 55, y: 22 },
  { id: 'telescope-1', emoji: '🔭', label: 'Observatory', tier: 4, x: 15, y: 30 },
  { id: 'needoh-7', emoji: '💛', label: 'Needoh Sparkle', tier: 4, x: 42, y: 35 },
  { id: 'statue-1', emoji: '🗽', label: 'Statue', tier: 4, x: 60, y: 32 },
  { id: 'campfire-1', emoji: '🔥', label: 'Campfire', tier: 4, x: 35, y: 55 },
  { id: 'tent-1', emoji: '⛺', label: 'Tent', tier: 4, x: 25, y: 45 },
  { id: 'fish-1', emoji: '🐠', label: 'Tropical fish', tier: 4, x: 8, y: 65 },
  { id: 'needoh-8', emoji: '💜', label: 'Needoh Shimmer', tier: 4, x: 75, y: 55 },
  { id: 'swing-1', emoji: '🎠', label: 'Swing set', tier: 4, x: 65, y: 42 },
  { id: 'crab-1', emoji: '🦀', label: 'Crab', tier: 4, x: 92, y: 60 },
  { id: 'shell-1', emoji: '🐚', label: 'Seashell', tier: 4, x: 88, y: 65 },
  { id: 'coral-1', emoji: '🪸', label: 'Coral', tier: 4, x: 3, y: 62 },
  { id: 'whale-1', emoji: '🐋', label: 'Whale', tier: 4, x: 50, y: 75 },
  { id: 'dolphin-1', emoji: '🐬', label: 'Dolphin', tier: 4, x: 35, y: 72 },

  // Tier 5: Sessions 50+
  { id: 'aurora-1', emoji: '🌌', label: 'Aurora', tier: 5, x: 50, y: 5 },
  { id: 'golden-needoh-1', emoji: '⭐', label: 'Golden Needoh', tier: 5, x: 50, y: 45 },
  { id: 'crystal-1', emoji: '💎', label: 'Crystal cave', tier: 5, x: 30, y: 38 },
  { id: 'dragon-1', emoji: '🐉', label: 'Dragon', tier: 5, x: 70, y: 20 },
  { id: 'moon-1', emoji: '🌙', label: 'Crescent moon', tier: 5, x: 85, y: 8 },
  { id: 'golden-needoh-2', emoji: '🌟', label: 'Golden Needoh King', tier: 5, x: 45, y: 30 },
  { id: 'volcano-1', emoji: '🌋', label: 'Volcano', tier: 5, x: 15, y: 20 },
  { id: 'ufo-1', emoji: '🛸', label: 'UFO', tier: 5, x: 75, y: 10 },
  { id: 'comet-1', emoji: '☄️', label: 'Comet', tier: 5, x: 25, y: 8 },
  { id: 'crown-1', emoji: '👑', label: 'Crown monument', tier: 5, x: 50, y: 18 },
];

// How many completed sessions to reach each island level
export const LEVEL_THRESHOLDS = [
  { level: 1, sessions: 0 },
  { level: 2, sessions: 5 },
  { level: 3, sessions: 15 },
  { level: 4, sessions: 30 },
  { level: 5, sessions: 50 },
];

// Given a count of completed sessions, return the current island level
export function getIslandLevel(completedSessions) {
  let level = 1;
  for (const threshold of LEVEL_THRESHOLDS) {
    if (completedSessions >= threshold.sessions) {
      level = threshold.level;
    }
  }
  return level;
}

// Given a count of completed sessions, return the next element to unlock (or null if all unlocked)
export function getNextElement(unlockedIds) {
  return ISLAND_ELEMENTS.find((el) => !unlockedIds.includes(el.id)) || null;
}
