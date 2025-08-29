<script setup>
const { item } = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const releaseYear = computed(() => {
  const date = item.release_date || item.first_air_date
  return date ? new Date(date).getFullYear() : ""
})

const duration = computed(() => {
  if (item.runtime) {
    const hours = Math.floor(item.runtime / 60)
    const minutes = item.runtime % 60
    return `${hours}h ${minutes}m`
  }
  return ""
})

const director = computed(() => {
  return item.credits?.crew?.find((person) => person.job === "Director")?.name || ""
})

const writers = computed(() => {
  return item.credits?.crew
    ?.filter((person) => ["Writer", "Screenplay", "Story"].includes(person.job))
    .map((person) => person.name)
    .join(", ") || ""
})
</script>

<template>
  <div v-if="item" class="w-full">
    <section
      class="relative w-full min-h-[50vh] bg-cover bg-center"
      :style="{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }"
    >
      <div class="absolute inset-0 bg-black opacity-75"></div>
      
      <div class="relative z-10 flex items-start max-w-6xl mx-auto px-6 py-8 gap-8">
        <img
          :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"
          :alt="item.title || item.name"
          class="w-64 rounded-2xl shadow-lg flex-shrink-0"
        />
        <div class="flex-1 text-white">
          <h1 class="text-4xl font-extrabold">
            {{ item.title || item.name }}
            <span class="text-gray-300 font-medium text-3xl"> ({{ releaseYear }}) </span>
          </h1>
          <div class="flex flex-wrap items-center gap-3 text-gray-300 mt-2">
            <p>{{ item.release_date || item.first_air_date }}</p>
            <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
            <p>{{ item.genres.map((g) => g.name).join(", ") }}</p>
            <span v-if="duration" class="w-1 h-1 bg-gray-400 rounded-full"></span>
            <p v-if="duration">{{ duration }}</p>
          </div>
          <div class="flex items-center gap-3 mt-4">
            <ProgressBar :value="item.vote_average * 10" :size="50" />
            <span class="text-lg">User Score</span>
          </div>
          <div class="mt-5">
            <h2 class="text-xl font-semibold mb-2">Overview</h2>
            <p class="text-gray-200 leading-relaxed">{{ item.overview }}</p>
          </div>
          <div class="mt-5 flex flex-col gap-2">
            <p v-if="director">
              <span class="font-bold text-white">Director: </span>
              <span class="text-gray-300"> {{ director }} </span>
            </p>
            <p v-if="writers">
              <span class="font-bold text-white">Writers: </span>
              <span class="text-gray-300"> {{ writers }} </span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="max-w-6xl mx-auto px-6 mt-8">
      <h2 class="text-2xl font-bold mb-3">Top Cast</h2>
      <div class="flex gap-4 overflow-x-auto pb-2">
        <div
          v-for="actor in item.credits.cast"
          :key="actor.id"
          class="w-32 flex-shrink-0 text-center bg-white shadow rounded-xl p-2"
        >
          <img
            :src="actor.profile_path
              ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
              : 'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg'"
            :alt="actor.name"
            class="rounded-lg mb-1 h-40 w-full object-cover"
          />
          <p class="text-sm font-bold text-gray-800 truncate">{{ actor.name }}</p>
          <p class="text-xs text-gray-500 truncate">{{ actor.character }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
