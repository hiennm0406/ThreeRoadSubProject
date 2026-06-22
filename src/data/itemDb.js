import db from './items.generated.json'

export const SLOT_COLORS = {
  hat: '#94a3b8',
  body: '#64748b',
  shoes: '#78716c',
  gloves: '#a8a29e',
  cloak: '#8b5cf6',
  ring: '#f59e0b',
  necklace: '#06b6d4',
  hand: '#ef4444',
  belt: '#d97706',
}

const DEFAULT_SET_COLOR = '#64748b'

export function normalize(s) {
  return String(s ?? '').toLowerCase()
}

export function buildTerms(query) {
  return normalize(query)
    .split('|')
    .map((x) => x.trim())
    .filter(Boolean)
}

export function formatStatLine(stats) {
  if (!stats) return ''
  const parts = []
  if (stats.hp) parts.push(`+${stats.hp} HP`)
  if (stats.armor) parts.push(`+${stats.armor} Armor`)
  if (stats.damage) parts.push(`+${stats.damage} Damage`)
  if (stats.speed) parts.push(`+${stats.speed} Speed`)
  if (stats.thorns) parts.push(`Thorns +${stats.thorns}`)
  if (stats.lifesteal) parts.push(`Lifesteal ${Math.round(stats.lifesteal * 100)}%`)
  return parts.join(', ')
}

export function loadItemDatabase() {
  const sets = (db.sets ?? []).map((s) => ({
    ...s,
    color: s.color ?? DEFAULT_SET_COLOR,
  }))
  const slots = db.slots ?? []
  const items = (db.items ?? []).map((it) => ({
    ...it,
    stats: it.stats ?? {},
  }))
  const heroes = db.heroes ?? []
  const setById = Object.fromEntries(sets.map((s) => [s.id, s]))
  const slotById = Object.fromEntries(slots.map((s) => [s.id, s]))
  return {
    game: db.game ?? 'Three Remain',
    exportedAt: db.exportedAt ?? null,
    sets,
    setById,
    slots,
    slotById,
    items,
    heroes,
  }
}

export function filterItems(
  items,
  { query = '', selectedSets = [], selectedSlots = [], matchMode = 'any' },
) {
  const terms = buildTerms(query)
  const needSets = Array.isArray(selectedSets) ? selectedSets : Array.from(selectedSets)
  const needSlots = Array.isArray(selectedSlots) ? selectedSlots : Array.from(selectedSlots)
  const mode = matchMode

  return items.filter((it) => {
    if (needSets.length > 0) {
      const ok =
        mode === 'all'
          ? needSets.every((s) => it.setGroup === s)
          : needSets.some((s) => it.setGroup === s)
      if (!ok) return false
    }

    if (needSlots.length > 0) {
      const ok =
        mode === 'all'
          ? needSlots.every((s) => it.slot === s)
          : needSlots.some((s) => it.slot === s)
      if (!ok) return false
    }

    if (terms.length > 0) {
      const hay = [
        it.name,
        it.setGroup,
        it.slot,
        it.rarity,
        `lv${it.level}`,
        `id ${it.id}`,
        formatStatLine(it.stats),
      ]
        .map(normalize)
        .join(' ')
      const ok = mode === 'all' ? terms.every((t) => hay.includes(t)) : terms.some((t) => hay.includes(t))
      if (!ok) return false
    }

    return true
  })
}
