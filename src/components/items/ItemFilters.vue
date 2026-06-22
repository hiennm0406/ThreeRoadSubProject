<template>
  <aside class="filters card">
    <div class="filters__title">Filters</div>

    <label class="filters__label">Name & stats</label>
    <input
      class="input"
      :value="query"
      placeholder="Use | for multiple terms (e.g. sentinel | helm)"
      autocomplete="off"
      @input="$emit('update:query', $event.target.value.trim())"
    />

    <div class="filters__row">
      <button class="btn" type="button" @click="$emit('toggle-match-mode')">
        {{ matchModeLabel }}
      </button>
      <button class="btn" type="button" @click="$emit('clear')">Clear</button>
    </div>

    <div class="filters__label">Equipment Set</div>
    <div class="setGrid">
      <button
        v-for="s in allSets"
        :key="s.id"
        type="button"
        class="setPick"
        :class="{ active: selectedSetIds.has(s.id) }"
        :style="{ '--set': s.color }"
        @click="$emit('toggle-set', s.id)"
      >
        {{ s.name }}
      </button>
    </div>

    <div class="filters__label">Slot</div>
    <div class="tagGrid">
      <button
        v-for="s in allSlots"
        :key="s.id"
        type="button"
        class="tagPick"
        :class="{ active: selectedSlotIds.has(s.id) }"
        :style="{ '--tag': slotColor(s.id) }"
        @click="$emit('toggle-slot', s.id)"
      >
        {{ s.name }}
      </button>
    </div>

    <div class="filters__hint">
      Showing <b>{{ filteredCount }}</b> / {{ totalCount }} items.
    </div>
  </aside>
</template>

<script>
import { SLOT_COLORS } from './../../data/itemDb'

export default {
  props: {
    allSets: { type: Array, required: true },
    allSlots: { type: Array, required: true },
    query: { type: String, default: '' },
    matchMode: { type: String, default: 'any' },
    selectedSetIds: { type: Object, required: true },
    selectedSlotIds: { type: Object, required: true },
    filteredCount: { type: Number, required: true },
    totalCount: { type: Number, required: true },
  },
  emits: ['update:query', 'toggle-match-mode', 'toggle-set', 'toggle-slot', 'clear'],
  computed: {
    matchModeLabel() {
      return this.matchMode === 'all' ? 'Match All' : 'Match Any'
    },
  },
  methods: {
    slotColor(id) {
      return SLOT_COLORS[id] ?? '#64748b'
    },
  },
}
</script>

<style scoped>
.filters {
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

.setGrid {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.setPick {
  text-align: left;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--panel-2);
  color: var(--text);
  cursor: pointer;
  font-weight: 600;
}

.setPick.active {
  border-color: color-mix(in srgb, var(--set) 75%, var(--border));
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--set) 22%, transparent);
  background: color-mix(in srgb, var(--set) 10%, var(--panel-2));
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
</style>
