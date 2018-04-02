<template>
  <div>
  <landingPages/>
  <h1 class="title">Project Vuejs with NuxtJS</h1>
    Ini isi dari halaman blog
  </div>
</template>

<script>
import landingPages from '~/pages/landingPage.vue'

export default {
  layout: 'home',
    components: {
    landingPages
  }
}
</script>