<template>
  <div class="detail">
    <template v-if="item">
      <div class="hero card">
        <div class="hero__main">
          <div class="name">{{ item.name }}</div>
          <div class="metaLine">ID {{ item.id }} · Lv{{ item.level }}</div>

          <div class="primaryBadges">
            <span class="pill setPill" :style="{ '--set': setColor(item.setGroup) }">{{ setName(item.setGroup) }}</span>
            <span class="pill pill--muted">{{ slotName(item.slot) }}</span>
            <span class="pill pill--muted">{{ rarityLabel(item.rarity) }}</span>
          </div>
        </div>

        <div class="hero__image icon" :class="rarityClass(item.rarity)">
          <img v-if="item.icon" :src="item.icon" alt="" loading="lazy" decoding="async" />
          <div v-else class="icon__placeholder">{{ initials(item.name) }}</div>
        </div>
      </div>

      <div class="section">
        <div class="section__title">Stats</div>
        <div v-if="statEntries.length === 0" class="empty">No bonus stats.</div>
        <div v-else class="stats">
          <div v-for="s in statEntries" :key="s.key" class="stat">
            <div class="stat__k">{{ s.label }}</div>
            <div class="stat__v">{{ s.value }}</div>
          </div>
        </div>
      </div>
    </template>

    <div v-else class="empty">Select an item.</div>
  </div>
</template>

<script>
export default {
  props: {
    item: { type: Object, default: null },
    setById: { type: Object, required: true },
    slotById: { type: Object, default: () => ({}) },
  },
  computed: {
    statEntries() {
      const stats = this.item?.stats ?? {}
      const rows = []
      if (stats.hp) rows.push({ key: 'hp', label: 'HP', value: `+${stats.hp}` })
      if (stats.armor) rows.push({ key: 'armor', label: 'Armor', value: `+${stats.armor}` })
      if (stats.damage) rows.push({ key: 'damage', label: 'Damage', value: `+${stats.damage}` })
      if (stats.speed) rows.push({ key: 'speed', label: 'Speed', value: `+${stats.speed}` })
      if (stats.thorns) rows.push({ key: 'thorns', label: 'Thorns', value: `+${stats.thorns}` })
      if (stats.lifesteal) rows.push({ key: 'lifesteal', label: 'Lifesteal', value: `${Math.round(stats.lifesteal * 100)}%` })
      return rows
    },
  },
  methods: {
    initials(name) {
      const s = String(name ?? '').trim()
      if (!s) return '?'
      const parts = s.split(/\s+/g)
      return (parts[0]?.[0] ?? '?').toUpperCase() + (parts[1]?.[0] ?? '')
    },
    rarityClass(rarity) {
      const r = String(rarity ?? '').toLowerCase()
      if (r === 'legendary') return 'legendary'
      if (r === 'epic') return 'epic'
      if (r === 'rare') return 'rare'
      if (r === 'uncommon') return 'uncommon'
      return 'common'
    },
    rarityLabel(rarity) {
      if (!rarity) return '—'
      return rarity.charAt(0).toUpperCase() + rarity.slice(1)
    },
    setName(id) {
      return this.setById?.[id]?.name ?? (id === 'none' ? 'No Set' : id)
    },
    setColor(id) {
      return this.setById?.[id]?.color ?? '#64748b'
    },
    slotName(id) {
      return this.slotById?.[id]?.name ?? id ?? '—'
    },
  },
}
</script>

<style scoped>
.detail {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.hero {
  padding: 14px;
  display: grid;
  grid-template-columns: 1fr 130px;
  gap: 14px;
  align-items: stretch;
}

.icon {
  width: 100%;
  height: 100%;
  min-height: 130px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  border: 1px solid var(--border);
  overflow: hidden;
}

.icon.common { background: rgba(148, 163, 184, 0.08); }
.icon.uncommon { background: rgba(52, 211, 153, 0.1); }
.icon.rare { background: rgba(96, 165, 250, 0.12); }
.icon.epic { background: rgba(167, 139, 250, 0.14); }
.icon.legendary { background: rgba(251, 191, 36, 0.14); }

.icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.icon__placeholder {
  font-weight: 900;
  letter-spacing: 0.8px;
  color: var(--muted);
  font-size: 20px;
}

.name {
  font-weight: 800;
  font-size: 24px;
}

.metaLine {
  color: var(--muted);
  font-size: 12px;
  margin-top: 4px;
}

.primaryBadges {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.section__title {
  font-weight: 700;
  margin-bottom: 8px;
}

.pill {
  font-size: 11px;
  padding: 4px 8px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--panel);
  color: var(--text);
}

.setPill {
  border-color: color-mix(in srgb, var(--set) 60%, var(--border));
  background: color-mix(in srgb, var(--set) 12%, var(--panel));
}

.pill--muted {
  color: var(--muted);
}

.stats {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.stat {
  padding: 10px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--panel-2);
}

.stat__k {
  font-size: 12px;
  color: var(--muted);
}

.stat__v {
  margin-top: 4px;
  font-weight: 800;
}

.empty {
  color: var(--muted);
  font-size: 13px;
}

@media (max-width: 520px) {
  .hero {
    grid-template-columns: 1fr;
  }
}
</style>
