<script setup>
import { fetchMultipleItems } from "@/services/tmdb"

const route = useRoute()
const results = ref([])
const loading = ref(true)
const query = ref(route.query.q || "")

onMounted(async () => {
  if (!query.value) return

  loading.value = true
  try {
    const data = await fetchMultipleItems("/search/multi", {
      query: query.value,
      include_adult: false,
    })
    // Sort by popularity for more reliable results
    results.value = data.results.sort((a, b) => b.popularity - a.popularity)
  } catch (error) {
    console.error("Error fetching search results:", error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="max-w-6xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">
      Search Results for "{{ query }}"
    </h1>

    <div v-if="loading" class="text-gray-500">Loading...</div>

    <div v-else-if="results.length === 0" class="text-gray-500">
      No results found.
    </div>

    <div
      v-else
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
    >
      <NuxtLink
          v-for="item in results"
          :key="item.id"
          :to="item.title ? `/movies/${item.id}` : `/tv/${item.id}`"
          class="group"
      >
        <Card
          :title="item.title || item.name"
          :score="item.vote_average * 10" 
          :imageUrl="`https://image.tmdb.org/t/p/w500${item.poster_path}`"
          :releaseDate="item.release_date || item.first_air_date"
        />
      </NuxtLink>
    </div>
  </div>
</template>
