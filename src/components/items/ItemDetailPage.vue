<template>
  <div class="itemDetailPage">
    <ItemFilters
      :all-tags="allTags"
      :query="query"
      :match-mode="matchMode"
      :selected-tag-ids="selectedTags"
      :filtered-count="filteredItems.length"
      :total-count="items.length"
      @update:query="query = $event"
      @toggle-match-mode="toggleMatchMode"
      @toggle-tag="toggleTag"
      @clear="clearAll"
    />

    <section class="list">
      <div v-if="filteredItems.length === 0" class="listEmpty card">
        Không có item nào khớp bộ lọc.
      </div>

      <article v-for="it in filteredItems" :key="it.id" class="listRow card">
        <ItemDetailPanel :item="it" :tag-by-id="tagById" />
      </article>
    </section>
  </div>
</template>

<script>
import ItemFilters from './ItemFilters.vue'
import ItemDetailPanel from './ItemDetailPanel.vue'
import { filterItems, loadItemDatabase } from './../../data/itemDb'

export default {
  components: { ItemFilters, ItemDetailPanel },
  data() {
    const { tags, tagById, items } = loadItemDatabase()
    return {
      allTags: tags,
      tagById,
      items,
      query: '',
      matchMode: 'any',
      selectedTags: new Set(),
    }
  },
  computed: {
    filteredItems() {
      return filterItems(this.items, {
        query: this.query,
        selectedTags: this.selectedTags,
        matchMode: this.matchMode,
      })
    },
  },
  methods: {
    toggleMatchMode() {
      this.matchMode = this.matchMode === 'all' ? 'any' : 'all'
    },
    toggleTag(id) {
      if (this.selectedTags.has(id)) this.selectedTags.delete(id)
      else this.selectedTags.add(id)
      this.selectedTags = new Set(this.selectedTags)
    },
    clearAll() {
      this.query = ''
      this.selectedTags = new Set()
    },
  },
}
</script>

<style scoped>
.itemDetailPage {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 16px;
  align-items: start;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
}

.listRow {
  padding: 14px;
}

.listEmpty {
  padding: 24px;
  color: var(--muted);
  text-align: center;
}

@media (max-width: 900px) {
  .itemDetailPage {
    grid-template-columns: 1fr;
  }
}
</style>
