// Har baar "naya wish" dabane par inme se ek alag theme (pichli wali se alag) lagti hai.
// light: true => halke background wali theme (text dark ho jata hai)

const dark = { btnText: '#2a0a00', chip: 'rgba(255,255,255,0.09)', light: false }
const light = { btnText: '#ffffff', chip: 'rgba(255,255,255,0.6)', light: true }

export const THEMES = [
  {
    id: 'diya', name: 'Diya Night', emoji: '🪔', ...dark,
    bg: ['#1a0533', '#4a0e4e', '#b3470d'],
    card: 'rgba(30,8,52,0.55)', border: 'rgba(255,196,77,0.45)',
    text: '#fff4dc', muted: '#f5d9a8', accent: '#ffc44d', accent2: '#ff7a1a',
    fw: ['#ffc44d', '#ff7a1a', '#ff4d6d', '#fff1b8'],
    floaters: ['🪔', '✨', '🏮', '🪔', '🌼'],
  },
  {
    id: 'rangoli', name: 'Royal Rangoli', emoji: '🌺', ...dark,
    bg: ['#3b0a45', '#a01a63', '#ff6b6b'],
    card: 'rgba(60,8,60,0.5)', border: 'rgba(255,209,102,0.5)',
    text: '#fff0f6', muted: '#ffd6e8', accent: '#ffd166', accent2: '#ff9ecb',
    fw: ['#ffd166', '#ff9ecb', '#c77dff', '#ffffff'],
    floaters: ['🌺', '🌸', '✨', '🪔', '💮'],
  },
  {
    id: 'fireworks', name: 'Midnight Fireworks', emoji: '🎆', ...dark,
    bg: ['#020617', '#0b1d4d', '#4c1d95'],
    card: 'rgba(8,16,48,0.58)', border: 'rgba(125,211,252,0.45)',
    text: '#eef6ff', muted: '#bcd7f5', accent: '#7dd3fc', accent2: '#f0abfc',
    fw: ['#7dd3fc', '#f0abfc', '#fde68a', '#86efac'],
    floaters: ['🎇', '✨', '⭐', '🎆', '🪔'],
  },
  {
    id: 'lakshmi', name: 'Golden Lakshmi', emoji: '🪙', ...dark,
    bg: ['#3b0a0a', '#7a1313', '#c2410c'],
    card: 'rgba(60,10,10,0.55)', border: 'rgba(252,211,77,0.55)',
    text: '#fff7e0', muted: '#fde7b0', accent: '#fcd34d', accent2: '#f59e0b',
    fw: ['#fcd34d', '#f59e0b', '#fb7185', '#fff7ae'],
    floaters: ['🪙', '🪷', '✨', '🪔', '💰'],
  },
  {
    id: 'lantern', name: 'Emerald Lantern', emoji: '🏮', ...dark,
    bg: ['#022c22', '#065f46', '#0f766e'],
    card: 'rgba(2,44,34,0.55)', border: 'rgba(253,224,71,0.45)',
    text: '#ecfff4', muted: '#bff0d4', accent: '#fde047', accent2: '#fb923c',
    fw: ['#fde047', '#fb923c', '#5eead4', '#ffffff'],
    floaters: ['🏮', '🪔', '✨', '🍃', '🏮'],
  },
  {
    id: 'marigold', name: 'Marigold Morning', emoji: '🌼', ...light,
    bg: ['#fff7d6', '#ffd36e', '#ff9f43'],
    card: 'rgba(255,255,255,0.55)', border: 'rgba(180,83,9,0.35)',
    text: '#4a1d00', muted: '#7c2d12', accent: '#c2410c', accent2: '#f59e0b',
    fw: ['#c2410c', '#f59e0b', '#db2777', '#7c3aed'],
    floaters: ['🌼', '🪔', '🏵️', '✨', '🌼'],
  },
  {
    id: 'peacock', name: 'Peacock Blue', emoji: '🦚', ...dark,
    bg: ['#021b3a', '#0a4a6e', '#0e7490'],
    card: 'rgba(2,27,58,0.55)', border: 'rgba(94,234,212,0.45)',
    text: '#ecfeff', muted: '#b6eef2', accent: '#5eead4', accent2: '#fcd34d',
    fw: ['#5eead4', '#fcd34d', '#60a5fa', '#f9a8d4'],
    floaters: ['🦚', '🪔', '✨', '🪷', '🦚'],
  },
  {
    id: 'kesar', name: 'Kesar Cream', emoji: '🧡', ...light,
    bg: ['#fff1e6', '#ffd0a1', '#ff8c5a'],
    card: 'rgba(255,255,255,0.55)', border: 'rgba(185,28,28,0.3)',
    text: '#5a1a00', muted: '#8a2f10', accent: '#b91c1c', accent2: '#ea580c',
    fw: ['#b91c1c', '#ea580c', '#d97706', '#9333ea'],
    floaters: ['🧡', '🪔', '🌸', '✨', '🪔'],
  },
]
