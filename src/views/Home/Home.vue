<template>
  <div class="home">
    <Header/>
    <TopIntro/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
import TopIntro from '@/views/Home/Components/TopIntro/TopIntro.vue'

export default {
  name: 'home',
  components: {
    Header,
    Footer,
    TopIntro
  }
}
</script>

<style scoped lang="scss">
@import 'Home.scss';
</style>
