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

  onMounted(async () => {
    fetchData(activeTab.value.url).then(data => {
      items.value = data
    })
  })

  function selectTab(tab) {
    activeTab.value = tab
    fetchData(tab.url).then(data => {
      items.value = data
    })
  }
</script>

<template>
  <div class="flex gap-4 mb-6">
    <button
      v-for="tab in tabs"
      :key="tab.key"
      @click="selectTab(tab)"
      :class="[
        'px-4 py-2 rounded-lg',
        activeTab.key === tab.key ? 'bg-gray-900 text-green-500' : 'bg-gray-200 text-gray-800'
      ]"
    >
      {{ tab.label }}
    </button>
  </div>
  <div class="flex overflow-x-scroll">
    <Card
      v-for="item in items"
      :key="item.id"
      :title="item.title || item.name"
      :score="item.vote_average * 10" 
      :imageUrl="`https://image.tmdb.org/t/p/w500${item.poster_path}`"
      :releaseDate="item.release_date || item.first_air_date"
    />
  </div>
</template>