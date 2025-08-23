<script setup>
import ProgressBar from './ProgressBar.vue';

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
  <div class="relative">
    <div class="w-40 h-64 m-4 rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 duration-300 ">
      <img 
        :src="imageUrl" 
        :alt="title"
        class="w-full h-64 object-cover"
      />
    </div>
    <div class="absolute bottom-32 left-6">
      <ProgressBar :value="score" :size="36" />
    </div>
    <div class="p-4">
      <h3 class="font-bold text-gray-800 cursor-pointer hover:text-blue-400 transition-colors duration-75">{{ title }}</h3>
      <p class="text-sm text-gray-600 mt-1">{{ releaseDate }}</p>
    </div>
  </div>
</template>