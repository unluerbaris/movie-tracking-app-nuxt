<script setup>
  import { fetchData } from "../services/tmdb.js"
  
  const items = ref([])

  const props = defineProps({
    url: {
      type: String,
      required: true,
    },
  })

  onMounted(async () => {
    fetchData(props.url).then(data => {
      items.value = data
      console.log(items.value)
    })
  })
</script>

<template>
  <div class="flex">
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
</template>