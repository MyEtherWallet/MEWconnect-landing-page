<template>
  <div class="home">
    <TopBanner />
    <AboutMewConnect />
  </div>
</template>

<script>
// @ is an alias to /src
import TopBanner from '@/components/TopBanner/TopBanner.vue'
import AboutMewConnect from '@/components/AboutMewConnect/AboutMewConnect.vue'

export default {
  name: 'home',
  components: {
    TopBanner,
    AboutMewConnect
  }
}
</script>
