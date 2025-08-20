<script setup>
  const query = ref('')

  function onSearch() {
    console.log('Searching for:', query.value)
  }
</script>

<template>
  <section 
  class="bg-center text-white py-20 px-6"
  style="background-image: url('https://play-lh.googleusercontent.com/proxy/gyYzLdhikv0LJIXs6YUr3jBoYvz4OmtkN_QTjV4-RPFrWG35RQGDkey3I3ZXWUvns4aI1u_goS3WAe_03vE1pLVI6nyNzpDBi7h9x0g0MDg1VPIhGw=s1920-w1920-h1080');"
  >
    <div class="mx-auto max-w-7xl">
      <h1 class="text-5xl font-bold mb-1">Welcome.</h1>
      <h3 class="mb-6 text-2xl text-white">
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
          type="submit"
          class="bg-linear-to-r from-cyan-400 to-cyan-500 absolute right-[-1px] px-4 py-3 rounded-full text-white hover:bg-gray-800"
        >
          Search
        </button>
      </form>
    </div>
  </section>
</template>
