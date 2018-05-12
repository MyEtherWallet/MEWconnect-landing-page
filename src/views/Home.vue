<template>
  <div class="home">
    <TopBanner />
    <AboutMewConnect />
    <Features />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import TopBanner from '@/components/TopBanner/TopBanner.vue'
import AboutMewConnect from '@/components/AboutMewConnect/AboutMewConnect.vue'
import Features from '@/components/Features/Features.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
  name: 'home',
  components: {
    TopBanner,
    AboutMewConnect,
    Features,
    Footer
  }
}
</script>
