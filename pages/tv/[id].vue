<script setup>
import { fetchDetails } from '@/services/tmdb'

const route = useRoute()
const tv = ref(null)

onMounted(async () => {
  tv.value =  await fetchDetails(`/tv/${route.params.id}`)
})
</script>


<template>
  <ItemPage :item="tv"/>
</template>