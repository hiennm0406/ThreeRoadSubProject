<template>
  <div class="itemsPage">
    <ItemFilters
      :all-sets="allSets"
      :all-slots="allSlots"
      :query="query"
      :match-mode="matchMode"
      :selected-set-ids="selectedSets"
      :selected-slot-ids="selectedSlots"
      :filtered-count="filteredItems.length"
      :total-count="items.length"
      @update:query="query = $event"
      @toggle-match-mode="toggleMatchMode"
      @toggle-set="toggleSet"
      @toggle-slot="toggleSlot"
      @clear="clearAll"
    />

    <section class="grid">
      <ItemGrid :items="filteredItems" :selected-id="selectedId" :tag-by-id="tagById" @select="onSelect" />
    </section>

    <aside class="detail card">
      <ItemDetailPanel :item="selectedItem" :tag-by-id="tagById" :set-bonuses="setBonuses" />
    </aside>
  </div>
</template>

<script>
import ItemGrid from './ItemGrid.vue'
import ItemDetailPanel from './ItemDetailPanel.vue'
import ItemFilters from './ItemFilters.vue'
import { filterItems, loadItemDatabase } from './../../data/itemDb'

export default {
  components: { ItemGrid, ItemDetailPanel, ItemFilters },
  data() {
    const { tagById, items, setBonuses, sets, slots } = loadItemDatabase()
    return {
      allSets: sets,
      allSlots: slots,
      tagById,
      setBonuses,
      items,
      query: '',
      matchMode: 'any',
      selectedSets: new Set(),
      selectedSlots: new Set(),
      selectedId: items[0]?.id ?? null,
    }
  },
  computed: {
    filteredItems() {
      return filterItems(this.items, {
        query: this.query,
        selectedSets: this.selectedSets,
        selectedSlots: this.selectedSlots,
        matchMode: this.matchMode,
      })
    },
    selectedItem() {
      return this.items.find((x) => x.id === this.selectedId) ?? null
    },
  },
  watch: {
    filteredItems(list) {
      if (list.length === 0) {
        this.selectedId = null
        return
      }
      if (!list.some((x) => x.id === this.selectedId)) {
        this.selectedId = list[0].id
      }
    },
  },
  methods: {
    toggleMatchMode() {
      this.matchMode = this.matchMode === 'all' ? 'any' : 'all'
    },
    toggleSet(id) {
      if (this.selectedSets.has(id)) this.selectedSets.delete(id)
      else this.selectedSets.add(id)
      this.selectedSets = new Set(this.selectedSets)
    },
    toggleSlot(id) {
      if (this.selectedSlots.has(id)) this.selectedSlots.delete(id)
      else this.selectedSlots.add(id)
      this.selectedSlots = new Set(this.selectedSlots)
    },
    clearAll() {
      this.query = ''
      this.selectedSets = new Set()
      this.selectedSlots = new Set()
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

.detail {
  padding: 14px;
}

@media (max-width: 1200px) {
  .itemsPage {
    grid-template-columns: 1fr;
  }
}
</style>
