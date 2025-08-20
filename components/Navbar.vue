<template>
  <nav class="bg-gray-800 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center space-x-8">
          <a href="/" class="text-2xl font-bold">CineTrack</a>
          <div class="hidden md:flex space-x-6 relative">
            <div class="relative group">
              <a href="#" class="hover:text-gray-300 transition">Movies</a>
              <div class="absolute text-sm w-38 bg-white text-black rounded-lg shadow-lg invisible group-hover:visible group-hover:opacity-100 duration-50" >
                <a href="#" class="block hover:rounded-lg px-4 py-2 hover:bg-gray-300">Popular</a>
                <a href="#" class="block hover:rounded-lg px-4 py-2 hover:bg-gray-300">Now Playing</a>
                <a href="#" class="block hover:rounded-lg px-4 py-2 hover:bg-gray-300">Upcoming</a>
                <a href="#" class="block hover:rounded-lg px-4 py-2 hover:bg-gray-300">Top Rated</a>
              </div>
            </div>
            <div class="relative group">
              <a href="#" class="hover:text-gray-300 transition">TV Shows</a>
              <div class="absolute text-sm w-38 bg-white text-black rounded-lg shadow-lg invisible group-hover:visible group-hover:opacity-100 duration-50" >
                <a href="#" class="block hover:rounded-lg px-4 py-2 hover:bg-gray-300">Popular</a>
                <a href="#" class="block hover:rounded-lg px-4 py-2 hover:bg-gray-300">Airing Today</a>
                <a href="#" class="block hover:rounded-lg px-4 py-2 hover:bg-gray-300">On TV</a>
                <a href="#" class="block hover:rounded-lg px-4 py-2 hover:bg-gray-300">Top Rated</a>
              </div>
            </div>
            <a href="#" class="hover:text-gray-300">People</a>
            <a href="#" class="hover:text-gray-300">More</a>
          </div>
        </div>
        <div class="flex items-center space-x-6">
          <a href="#" class="text-2xl hover:text-gray-300 font-bold">+</a>
          <a href="#" class="hover:text-gray-300">EN</a>
          <a href="#" class="hover:text-gray-300">Login</a>
          <a href="#" class="hover:text-gray-300">Join</a>
          <a href="#" class="hover:text-gray-300">Search</a>
        </div>
      </div>
    </div>
  </nav>
</template>
