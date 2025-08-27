<script setup>
  const { item } = defineProps({
    item: {
      type: Object,
      required: true
    },
  })
</script>

<template>
  <div v-if="item" class="p-6">
    <div class="md:flex-row gap-8">
      <img
        :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"
        :alt="item.title"
        class="rounded-lg shadow-lg"
      />
      <div>
        <h1 class="text-4xl font-bold mb-2">{{ item.title || item.name }}</h1>
        <p class="text-gray-400 mb-4">{{ item.release_date || item.first_air_date }} </p>
        <p class="mb-4">{{ item.overview }}</p>

        <!-- User Score -->
        <div class="flex items-center gap-2 mb-4">
          <span class="bg-green-600 px-3 py-1 rounded-full text-white font-bold">
            {{ Math.round(item.vote_average * 10) }}%
          </span>
          <span>User Score</span>
        </div>

        <!-- Genres -->
        <div class="mb-4">
          <h3 class="font-bold">Genres:</h3>
          <p>{{ item.genres.map(g => g.name).join(', ') }}</p>
        </div>

        <!-- Cast -->
        <div class="mt-6">
          <h3 class="text-xl font-bold mb-2">Top Cast</h3>
          <div class="flex gap-4 overflow-x-auto pb-2">
            <div
              v-for="actor in item.credits.cast"
              :key="actor.id"
              class="w-28 flex-shrink-0 text-center"
            >
              <img
                v-if="actor.profile_path"
                :src="`https://image.tmdb.org/t/p/w185${actor.profile_path}`"
                :alt="actor.name"
                class="rounded-lg mb-1"
              />
              <p class="text-sm font-bold">{{ actor.name }}</p>
              <p class="text-xs text-gray-400">{{ actor.character }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>