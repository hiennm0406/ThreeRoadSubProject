<template>
  <div class="detail">
    <template v-if="item">
      <div class="hero card">
        <div class="hero__main">
          <div class="name">{{ item.name }}</div>
          <div class="metaLine">ID {{ item.id }}</div>

          <div class="primaryBadges">
            <span v-if="setTag" class="pill" :style="{ '--tag': setTag.color }">{{ setTag.name }}</span>
            <span v-if="slotTag" class="pill pill--muted">{{ slotTag.name }}</span>
          </div>

          <div class="tags">
            <span v-for="t in item.tags ?? []" :key="t" class="tag" :style="{ '--tag': tagColor(t) }">
              {{ tagName(t) }}
            </span>
          </div>
        </div>

        <div class="hero__image icon" :class="setClass(item.setGroup)">
          <img v-if="item.icon" :src="item.icon" alt="" loading="lazy" decoding="async" />
          <div v-else class="icon__placeholder">{{ initials(item.name) }}</div>
        </div>
      </div>

      <div v-if="(item.statTable ?? []).length > 0" class="section">
        <div class="section__title">Stats theo level</div>
        <div class="tableWrap">
          <table class="levelTable">
            <thead>
              <tr>
                <th>Stat</th>
                <th v-for="lv in 4" :key="lv">Lv{{ lv }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in item.statTable" :key="row.key">
                <td class="levelTable__label">{{ row.label }}</td>
                <td v-for="(val, idx) in row.values" :key="idx" class="levelTable__val">{{ val }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div v-if="(item.passives ?? []).length > 0" class="section">
        <div class="section__title">Passive</div>
        <div class="passives">
          <div v-for="(p, idx) in item.passives" :key="idx" class="passiveRow">
            <span class="pill">≥ Lv{{ p.minLevel }}</span>
            <span class="passiveRow__text">{{ p.text }}</span>
          </div>
        </div>
      </div>

      <div v-if="setBonusLines.length > 0" class="section">
        <div class="section__title">Set bonus — {{ setTag?.name }}</div>
        <div class="passives">
          <div v-for="(b, idx) in setBonusLines" :key="idx" class="passiveRow">
            <span class="pill">{{ b.pieces }} món</span>
            <span class="passiveRow__text">{{ b.text }}</span>
          </div>
        </div>
      </div>
    </template>

    <div v-else class="empty">Select an item.</div>
  </div>
</template>

<script>
import { getSetBonuses } from './../../data/itemDb'

export default {
  props: {
    item: { type: Object, default: null },
    tagById: { type: Object, required: true },
    setBonuses: { type: Object, default: () => ({}) },
  },
  computed: {
    setTag() {
      return this.tagById?.[this.item?.setGroup] ?? null
    },
    slotTag() {
      return this.tagById?.[this.item?.slot] ?? null
    },
    setBonusLines() {
      if (!this.item?.setGroup) return []
      return getSetBonuses(this.setBonuses, this.item.setGroup)
    },
  },
  methods: {
    initials(name) {
      const s = String(name ?? '').trim()
      if (!s) return '?'
      const parts = s.split(/\s+/g)
      return (parts[0]?.[0] ?? '?').toUpperCase() + (parts[1]?.[0] ?? '')
    },
    setClass(setGroup) {
      const g = String(setGroup ?? '').toLowerCase()
      if (g === 'sentinel') return 'sentinel'
      if (g === 'thornlord') return 'thornlord'
      if (g === 'bloodreaver') return 'bloodreaver'
      return 'common'
    },
    tagName(id) {
      return this.tagById?.[id]?.name ?? id
    },
    tagColor(id) {
      return this.tagById?.[id]?.color ?? 'rgba(148,163,184,0.35)'
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

.icon.sentinel {
  background: rgba(96, 165, 250, 0.12);
}
.icon.thornlord {
  background: rgba(132, 204, 22, 0.12);
}
.icon.bloodreaver {
  background: rgba(244, 63, 94, 0.12);
}
.icon.common {
  background: rgba(148, 163, 184, 0.08);
}

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

.tags {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--tag) 50%, var(--border));
  background: color-mix(in srgb, var(--tag) 14%, var(--panel));
  color: var(--text);
  font-size: 12px;
}

.tableWrap {
  overflow-x: auto;
}

.levelTable {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}

.levelTable th,
.levelTable td {
  border: 1px solid var(--border);
  padding: 8px 10px;
  text-align: center;
}

.levelTable th {
  background: var(--panel-2);
  font-weight: 700;
}

.levelTable__label {
  text-align: left;
  font-weight: 600;
  color: var(--muted);
}

.levelTable__val {
  font-weight: 700;
}

.passives {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.passiveRow {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  padding: 10px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--panel-2);
}

.passiveRow__text {
  line-height: 1.35;
}

.pill {
  font-size: 11px;
  padding: 4px 8px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--panel);
  color: var(--text);
  white-space: nowrap;
}

.pill--muted {
  color: var(--muted);
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
