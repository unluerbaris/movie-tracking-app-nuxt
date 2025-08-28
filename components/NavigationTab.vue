<script setup>
import { fetchData } from "../services/tmdb.js"

const tabs = [
  { key: "popular_movies", label: "Popular Movies", url: `/movie/popular` },
  { key: "top_rated_movies", label: "Top Rated Movies", url: `/movie/top_rated` },
  { key: "popular_tv", label: "Popular TV Shows", url: `/tv/popular` },
  { key: "top_rated_tv", label: "Top Rated TV Shows", url: `/tv/top_rated` }
]

const activeTab = ref(tabs[0])
const items = ref([])
const isFadingOut = ref(false)
const isLoading = ref(false)

onMounted(async () => {
  items.value = await fetchData(activeTab.value.url)
})

async function selectTab(tab) {
  if (activeTab.value.key === tab.key) return

  // Trigger fade out
  isFadingOut.value = true

  // Wait for fade-out before fetching
  setTimeout(async () => {
    isLoading.value = true
    activeTab.value = tab
    items.value = await fetchData(tab.url)
    isLoading.value = false
    // Trigger fade-in after items are fetched
    isFadingOut.value = false
  }, 400) // same duration as CSS fade
}
</script>

<template>
  <div class="flex m-6 justify-center">
    <button
      v-for="(tab, index) in tabs"
      :key="tab.key"
      @click="selectTab(tab)"
      :class="[
        'px-6 py-2 cursor-pointer transition-colors duration-500',
        'border border-gray-300 font-bold',
        index === 0 ? 'rounded-l-full' : '',
        index === tabs.length - 1 ? 'rounded-r-full' : '',
        activeTab.key === tab.key
          ? 'bg-gray-900 text-green-500'
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      ]"
    >
      {{ tab.label }}
    </button>
  </div>
  <div class="flex justify-center">
    <div
      class="flex overflow-x-auto max-w-[80%] transition-opacity duration-500"
      :class="isFadingOut || isLoading ? 'opacity-0' : 'opacity-100'"
    >
      <NuxtLink
        v-for="item in items"
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

<style scoped>
.transition-opacity {
  transition: opacity 0.4s ease-in-out;
}
</style>
