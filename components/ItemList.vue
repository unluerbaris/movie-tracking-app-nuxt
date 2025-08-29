<script setup>
import { fetchData } from "../services/tmdb.js"

const items = ref([])
const selectedSort = ref("popularity-desc")

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
})

onMounted(async () => {
  fetchData(props.url).then(data => {
    items.value = data
    sortItems()
  })
})

const sortItems = () => {
  switch (selectedSort.value) {
    case "popularity-asc":
      items.value.sort((a, b) => a.popularity - b.popularity)
      break
    case "popularity-desc":
      items.value.sort((a, b) => b.popularity - a.popularity)
      break
    case "rating-asc":
      items.value.sort((a, b) => a.vote_average - b.vote_average)
      break
    case "rating-desc":
      items.value.sort((a, b) => b.vote_average - a.vote_average)
      break
    case "release-asc":
      items.value.sort(
        (a, b) =>
          new Date(a.release_date || a.first_air_date) -
          new Date(b.release_date || b.first_air_date)
      )
      break
    case "release-desc":
      items.value.sort(
        (a, b) =>
          new Date(b.release_date || b.first_air_date) -
          new Date(a.release_date || a.first_air_date)
      )
      break
    case "title-asc":
      items.value.sort((a, b) =>
        (a.title || a.name).localeCompare(b.title || b.name)
      )
      break
    case "title-desc":
      items.value.sort((a, b) =>
        (b.title || b.name).localeCompare(a.title || a.name)
      )
      break
  }
}
</script>

<template>
  <div class="max-w-6xl mx-auto p-4">
    <div class="flex justify-end mb-4">
      <div>
        <h3 class="mb-2 ml-2 font-bold text-gray-800">Sort Results By</h3>
        <select
          v-model="selectedSort"
          @change="sortItems"
          class="px-3 py-2 border border-gray-300 rounded-lg shadow-lg text-sm focus:ring-2 focus:ring-blue-500 trasition"
        >
          <option value="popularity-desc">Popularity (High → Low)</option>
          <option value="popularity-asc">Popularity (Low → High)</option>
          <option value="rating-desc">Rating (High → Low)</option>
          <option value="rating-asc">Rating (Low → High)</option>
          <option value="release-desc">Release Date (New → Old)</option>
          <option value="release-asc">Release Date (Old → New)</option>
          <option value="title-asc">Title (A → Z)</option>
          <option value="title-desc
          ">Title (Z → A)</option>
        </select>
      </div>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
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
