import db from './items.generated.json'

export const STAT_ROWS = [
  { key: 'hp', label: 'HP' },
  { key: 'armor', label: 'Armor' },
  { key: 'resist', label: 'Resist' },
  { key: 'physDmg', label: 'Phys DMG' },
  { key: 'magDmg', label: 'Mag DMG' },
  { key: 'speed', label: 'Speed' },
  { key: 'thorns', label: 'Thorns' },
  { key: 'lifesteal', label: 'Lifesteal', percent: true },
]

export function normalize(s) {
  return String(s ?? '').toLowerCase()
}

export function buildTerms(query) {
  return normalize(query)
    .split('|')
    .map((x) => x.trim())
    .filter(Boolean)
}

function formatStatValue(key, value, row) {
  const n = Number(value ?? 0)
  if (!n) return '—'
  if (row?.percent) return `${Math.round(n * 1000) / 10}%`
  if (key === 'speed') return `+${n}`
  return `+${n}`
}

export function buildStatTable(levelStats = []) {
  const byLevel = Object.fromEntries((levelStats ?? []).map((x) => [x.level, x.stats ?? {}]))
  return STAT_ROWS.map((row) => {
    const values = [1, 2, 3, 4].map((lv) => formatStatValue(row.key, byLevel[lv]?.[row.key], row))
    const hasAny = values.some((v) => v !== '—')
    return hasAny ? { ...row, values } : null
  }).filter(Boolean)
}

function normalizeItem(raw) {
  const setGroup = raw.setGroup ?? 'none'
  const slot = raw.slot ?? 'none'
  const levelStats = raw.levelStats ?? []
  const passives = Array.isArray(raw.passives) ? raw.passives : []
  const statTable = buildStatTable(levelStats)

  return {
    id: raw.id,
    name: raw.name,
    setGroup,
    slot,
    icon: raw.icon ?? null,
    tags: [setGroup, slot].filter((t) => t && t !== 'none'),
    levelStats,
    passives,
    statTable,
    searchText: [
      raw.name,
      setGroup,
      slot,
      ...statTable.flatMap((r) => r.values),
      ...passives.map((p) => `lv${p.minLevel} ${p.text}`),
    ]
      .join(' ')
      .toLowerCase(),
  }
}

export function loadItemDatabase() {
  const isV2 = (db.version ?? 1) >= 2

  const sets = (db.sets ?? []).map((s) => ({
    ...s,
    color: s.color ?? '#64748b',
  }))
  const slots = (db.slots ?? []).map((s) => ({
    ...s,
    color: s.color ?? '#64748b',
  }))

  const tags = [
    ...sets.map((s) => ({ id: s.id, name: s.name, color: s.color, kind: 'set' })),
    ...slots.map((s) => ({ id: s.id, name: s.name, color: s.color, kind: 'slot' })),
  ]

  const tagById = Object.fromEntries(tags.map((t) => [t.id, t]))
  const setBonuses = db.setBonuses ?? {}
  const heroes = (db.heroes ?? []).map((h) => h.name).filter(Boolean)

  let items
  if (isV2) {
    items = (db.items ?? []).map(normalizeItem)
  } else {
    items = (db.items ?? []).map((it) => ({
      ...it,
      tags: it.tags ?? [],
      searchText: normalize(it.name),
    }))
  }

  return { tags, tagById, items, heroes, sets, slots, setBonuses, game: db.game ?? 'Three Remain' }
}

export function filterItems(
  items,
  { query = '', selectedTags = [], selectedHeroes = [], matchMode = 'any' },
) {
  const terms = buildTerms(query)
  const needTags = Array.isArray(selectedTags) ? selectedTags : Array.from(selectedTags)
  const needHeroes = Array.isArray(selectedHeroes) ? selectedHeroes : Array.from(selectedHeroes)
  const mode = matchMode

  return items.filter((it) => {
    if (needTags.length > 0) {
      const tags = it.tags ?? []
      const ok =
        mode === 'all' ? needTags.every((t) => tags.includes(t)) : needTags.some((t) => tags.includes(t))
      if (!ok) return false
    }

    if (needHeroes.length > 0) {
      const owners = it.heroOwners ?? []
      const ok =
        mode === 'all'
          ? needHeroes.every((h) => owners.includes(h))
          : needHeroes.some((h) => owners.includes(h))
      if (!ok) return false
    }

    if (terms.length > 0) {
      const hay =
        (it.searchText ?? '') +
        ' ' +
        normalize((it.effects ?? []).map((e) => e.text).join(' ')) +
        ' ' +
        normalize((it.heroOwners ?? []).join(' '))
      const ok = mode === 'all' ? terms.every((t) => hay.includes(t)) : terms.some((t) => hay.includes(t))
      if (!ok) return false
    }

    return true
  })
}

export function getSetBonuses(setBonuses, setGroup) {
  return setBonuses?.[setGroup] ?? []
}
