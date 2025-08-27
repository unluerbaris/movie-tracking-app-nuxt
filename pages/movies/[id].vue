<script setup>
import { fetchDetails } from '@/services/tmdb'

const route = useRoute()
const movie = ref(null)

onMounted(async () => {
  movie.value =  await fetchDetails(`/movie/${route.params.id}`)
})
</script>


<template>
  <ItemPage :item="movie"/>
</template>