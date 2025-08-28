<script setup>
const router = useRouter()
const query = ref("")

const handleSearch = () => {
  if (!query.value.trim()) return
  router.push({
    path: "/searchResults",
    query: { q: query.value }
  })
}
</script>

<template>
  <section 
    class="relative bg-center bg-cover text-white py-20 px-6"
    style="background-image: url('https://image.tmdb.org/t/p/original/rqbCbjB19amtOtFQbb3K2lgm2zv.jpg');"
  >
    <div class="absolute inset-0 bg-blue-500 opacity-50"></div>
    <div class="relative mx-auto max-w-7xl">
      <h1 class="text-5xl font-bold mb-1">Welcome.</h1>
      <h3 class="mb-6 text-2xl">
        Millions of movies, TV shows and people to discover. Explore now.
      </h3>
      <form @submit.prevent="onSearch" class="flex relative w-full">
        <input
          v-model="query"
          type="text"
          placeholder="Search for a movie, tv show, person..."
          class="w-full bg-gray-50 rounded-full px-5 py-3 text-gray-900 placeholder-gray-500 focus:outline-none"
        />
        <button
          @click="handleSearch"
          class="bg-linear-to-r from-cyan-400 to-cyan-500 absolute right-[-1px] px-4 py-3 rounded-full text-white cursor-pointer hover:bg-gray-800"
        >
          Search
        </button>
      </form>
    </div>
  </section>
</template>
