<template>
  <div class="itemsPage">
    <aside class="filters card">
      <div class="filters__title">Filters</div>

      <label class="filters__label">Name & text</label>
      <input
        class="input"
        v-model.trim="query"
        placeholder="Use | for multiple terms (e.g. fire | sword)"
        autocomplete="off"
      />

      <div class="filters__row">
        <button class="btn" @click="toggleMatchMode">
          {{ matchModeLabel }}
        </button>
        <button class="btn" @click="clearAll">Clear</button>
      </div>

      <div class="filters__label">Tags</div>
      <div class="tagGrid">
        <button
          v-for="t in allTags"
          :key="t.id"
          class="tagPick"
          :class="{ active: selectedTags.has(t.id) }"
          :style="{ '--tag': t.color }"
          @click="toggleTag(t.id)"
        >
          {{ t.name }}
        </button>
      </div>

      <div class="filters__hint">
        Showing <b>{{ filteredItems.length }}</b> / {{ items.length }} items.
      </div>
    </aside>

    <section class="grid">
      <ItemGrid :items="filteredItems" :selected-id="selectedId" @select="onSelect" />
    </section>

    <aside class="detail card">
      <ItemDetailPanel :item="selectedItem" :tag-by-id="tagById" />
    </aside>
  </div>
</template>

<script>
import ItemGrid from './ItemGrid.vue'
import ItemDetailPanel from './ItemDetailPanel.vue'
import db from './../../data/items.generated.json'

const TAG_COLORS = {
  weapon: '#f59e0b',
  armor: '#94a3b8',
  food: '#34d399',
  magic: '#a78bfa',
  fire: '#fb7185',
  ice: '#60a5fa',
  lightning: '#fbbf24',
  heal: '#22c55e',
}

function normalize(s) {
  return String(s ?? '').toLowerCase()
}

function buildTerms(query) {
  return normalize(query)
    .split('|')
    .map((x) => x.trim())
    .filter(Boolean)
}

export default {
  components: { ItemGrid, ItemDetailPanel },
  data() {
    const tags = (db.tags ?? []).map((t) => ({
      ...t,
      color: t.color ?? TAG_COLORS[t.id] ?? '#64748b',
    }))
    const items = db.items ?? []
    const tagById = Object.fromEntries(tags.map((t) => [t.id, t]))

    return {
      allTags: tags,
      tagById,
      items,
      query: '',
      matchMode: 'any', // any | all
      selectedTags: new Set(),
      selectedId: items[0]?.id ?? null,
    }
  },
  computed: {
    matchModeLabel() {
      return this.matchMode === 'all' ? 'Match All' : 'Match Any'
    },
    filteredItems() {
      const terms = buildTerms(this.query)
      const needTags = Array.from(this.selectedTags)
      const mode = this.matchMode

      return this.items.filter((it) => {
        if (needTags.length > 0) {
          const tags = it.tags ?? []
          const ok = mode === 'all' ? needTags.every((t) => tags.includes(t)) : needTags.some((t) => tags.includes(t))
          if (!ok) return false
        }

        if (terms.length > 0) {
          const hay =
            normalize(it.name) +
            ' ' +
            normalize((it.effects ?? []).map((e) => e.text).join(' ')) +
            ' ' +
            normalize((it.effects ?? []).flatMap((e) => (e.fields ?? []).map((f) => `${f.key} ${f.value}`)).join(' ')) +
            ' ' +
            normalize((it.heroOwners ?? []).join(' '))
          const ok = mode === 'all' ? terms.every((t) => hay.includes(t)) : terms.some((t) => hay.includes(t))
          if (!ok) return false
        }

        return true
      })
    },
    selectedItem() {
      return this.items.find((x) => x.id === this.selectedId) ?? null
    },
  },
  methods: {
    toggleMatchMode() {
      this.matchMode = this.matchMode === 'all' ? 'any' : 'all'
    },
    toggleTag(id) {
      if (this.selectedTags.has(id)) this.selectedTags.delete(id)
      else this.selectedTags.add(id)
      this.selectedTags = new Set(this.selectedTags) // keep reactive
    },
    clearAll() {
      this.query = ''
      this.selectedTags = new Set()
    },
    onSelect(id) {
      this.selectedId = id
    },
  },
}
</script>

<style scoped>
.itemsPage {
  display: grid;
  grid-template-columns: 320px 1fr 420px;
  gap: 16px;
  align-items: start;
}

.filters,
.detail {
  padding: 14px;
}

.filters__title {
  font-weight: 700;
  margin-bottom: 10px;
}

.filters__label {
  display: block;
  margin: 10px 0 6px;
  font-size: 12px;
  color: var(--muted);
}

.filters__row {
  display: flex;
  gap: 8px;
  margin-top: 10px;
}

.filters__hint {
  margin-top: 12px;
  font-size: 12px;
  color: var(--muted);
}

.tagGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
}

.tagPick {
  text-align: left;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--panel-2);
  color: var(--text);
  cursor: pointer;
}

.tagPick.active {
  border-color: color-mix(in srgb, var(--tag) 75%, var(--border));
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--tag) 22%, transparent);
}

@media (max-width: 1200px) {
  .itemsPage {
    grid-template-columns: 1fr;
  }
}
</style>

