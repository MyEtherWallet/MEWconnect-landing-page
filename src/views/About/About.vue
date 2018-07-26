<template>
  <div class="about">
    <AboutText></AboutText>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
import AboutText from './Components/AboutText/AboutText.vue'

export default {
  name: 'about',
  components: {
    Header,
    Footer,
    AboutText
  }
}
</script>

<style lang="scss">
@import 'About';
</style>
