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
export const MAX_ITEM_LEVEL = 4
export const STAT_KEYS = ['hp', 'armor', 'damage', 'speed', 'thorns', 'lifesteal']

const STAT_LABELS = {
  hp: 'HP',
  armor: 'Armor',
  damage: 'Damage',
  speed: 'Speed',
  thorns: 'Thorns',
  lifesteal: 'Lifesteal',
}

export function getFamilyId(item) {
  return item.id - item.level + 1
}

export function buildStatsByLevel(levels, maxLevel = MAX_ITEM_LEVEL) {
  const byLevel = Object.fromEntries(levels.map((l) => [l.level, l.stats ?? {}]))
  const result = {}
  for (const key of STAT_KEYS) {
    result[key] = Array.from({ length: maxLevel }, (_, i) => {
      const v = byLevel[i + 1]?.[key]
      return v == null ? 0 : v
    })
  }
  return result
}

export function formatStatLevels(values, key) {
  if (key === 'lifesteal') {
    return values.map((v) => Math.round((Number(v) || 0) * 100)).join('/')
  }
  return values.map((v) => {
    const n = Number(v) || 0
    return Number.isInteger(n) ? n : n
  }).join('/')
}

export function groupItems(items) {
  const map = new Map()
  for (const it of items) {
    const familyId = getFamilyId(it)
    let group = map.get(familyId)
    if (!group) {
      group = {
        familyId,
        id: familyId,
        name: it.name,
        setGroup: it.setGroup,
        slot: it.slot,
        icon: it.icon ?? null,
        levels: [],
      }
      map.set(familyId, group)
    }
    group.levels.push(it)
    if (it.icon) group.icon = it.icon
  }

  for (const group of map.values()) {
    group.levels.sort((a, b) => a.level - b.level)
    group.maxLevel = Math.max(...group.levels.map((l) => l.level), 1)
    group.rarity = group.levels[group.levels.length - 1]?.rarity ?? 'common'
    group.levelIds = group.levels.map((l) => l.id)
    group.statsByLevel = buildStatsByLevel(group.levels)
  }

  return Array.from(map.values()).sort((a, b) => a.familyId - b.familyId)
}

export function groupedStatEntries(statsByLevel) {
  if (!statsByLevel) return []
  return STAT_KEYS.filter((key) => statsByLevel[key]?.some((v) => Number(v) !== 0))
    .map((key) => ({
      key,
      label: STAT_LABELS[key],
      value: formatStatLevels(statsByLevel[key], key) + (key === 'lifesteal' ? '%' : ''),
    }))
}

export function groupedSearchText(item) {
  const statText = groupedStatEntries(item.statsByLevel)
    .map((s) => `${s.label} ${s.value}`)
    .join(' ')
  return [
    item.name,
    item.setGroup,
    item.slot,
    item.rarity,
    `id ${item.familyId}`,
    item.levelIds?.map((id) => `id ${id}`).join(' '),
    statText,
  ]
    .map(normalize)
    .join(' ')
}

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
  const groupedItems = groupItems(items)
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
    groupedItems,
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
      const hay = it.statsByLevel != null ? groupedSearchText(it) : [
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

export function filterGroupedItems(groupedItems, options) {
  return filterItems(groupedItems, options)
}
