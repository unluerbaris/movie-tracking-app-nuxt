<script setup>
const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const query = ref("");
const results = ref([]);
const loading = ref(false);
let timeout = null;

const fetchResults = async () => {
  if (query.value.trim().length < 3) {
    results.value = [];
    return;
  }

  loading.value = true;

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(
        query.value
      )}`
    );

    if (!res.ok) throw new Error("Failed to fetch TMDB data");

    const data = await res.json();
    results.value = data.results || [];
  } catch (error) {
    console.error("TMDB fetch error:", error);
    results.value = [];
  } finally {
    loading.value = false;
  }
};

const handleInput = () => {
  clearTimeout(timeout);
  timeout = setTimeout(fetchResults, 500);
};
</script>

<template>
  <div class="w-full bg-gray-100 py-1">
    <div class="max-w-7xl px-4 mx-auto">
      <input
        v-model="query"
        @input="handleInput"
        type="text"
        placeholder="Search for a movie, tv show..."
        class="w-full px-4 py-2 bg-gray-100 text-gray-500 placeholder-gray-400 focus:outline-none"
      />
    </div>
    <div
      v-if="results.length && query.length >= 3"
      class="absolute w-full bg-gray-100 z-50 max-h-80 overflow-y-auto"
    >
      <ul>
        <li
          v-for="result in results"
          :key="result.id"
          class="p-1 border-t border-gray-300 hover:bg-gray-300 cursor-pointer"
        >
          <div>
            <p class="px-10 text-gray-700 text-sm">
              {{ result.title || result.name }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
