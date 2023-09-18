<template>
  <div class="flex flex-col min-h-screen">
    <h1 class="m-5 text-5xl text-center">codeman1o1.me</h1>
    <div class="flex-grow">
      <div class="grid gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <a
          v-for="app in apps"
          :key="app.name"
          :href="app.url"
          target="_blank"
          rel="noopener noreferrer"
          class="flex flex-col items-center p-4 hover:bg-gray-300 transition-colors rounded-md"
        >
          <img
            :src="app.imagePath ?? `/images/${app.name}.svg`"
            :alt="`${app.name} logo`"
            class="w-32 h-32"
          />
          <p class="mt-2 text-xl text-center parent">{{ app.name }}</p>
        </a>
      </div>
    </div>
    <footer class="w-full bg-gray-400 text-center p-2">
      <p>
        Made with
        <a href="https://bun.sh" rel="noopener noreferrer" target="_blank">Bun</a>,
        <a href="https://vuejs.org" rel="noopener noreferrer" target="_blank">Vue</a> and
        <a href="https://tailwindcss.com" rel="noopener noreferrer" target="_blank">Tailwind CSS</a>
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const apps = ref<
  {
    name: string
    url: string
    imagePath?: string
  }[]
>([
  {
    name: "Nextcloud",
    url: "https://cloud.codeman1o1.me"
  },
  {
    name: "Grafana",
    url: "https://grafana.codeman1o1.me"
  },
  {
    name: "Portainer",
    url: "https://portainer.codeman1o1.me"
  },
  {
    name: "Agyl",
    url: "https://agyl.nl"
  }
])
</script>
