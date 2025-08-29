<script setup>
  defineProps({
    title: {
      type: String,
      default: "Title",
    },
    score: {
      type: Number,
      default: 0,
    },
    imageUrl: {
      type: String,
      default: "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg",
    },
    releaseDate: {
      type: String,
      default: "Release Date"
    },
  })
</script>

<template>
  <div class="w-40 m-4 cursor-pointer hover:scale-105 duration-300">
    <div class="relative w-full h-64 rounded-2xl shadow-lg">
      <img
        :src="imageUrl"
        :alt="title"
        class="w-full h-full object-cover rounded-2xl"
      />
      <div class="absolute -bottom-5 left-3">
        <ProgressBar :value="score" :size="40" />
      </div>
    </div>
    <div class="mt-5 px-1">
      <h3
        class="font-bold text-gray-800 cursor-pointer hover:text-blue-400 transition-colors duration-75 line-clamp-2"
      >
        {{ title }}
      </h3>
      <p class="text-sm text-gray-600 mt-1">
        {{ releaseDate }}
      </p>
    </div>
  </div>
</template>
