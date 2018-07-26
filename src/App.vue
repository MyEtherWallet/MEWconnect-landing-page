<template>
  <div id="app" class="wrapper" :class="{ 'open': openMenu }">
      <Header @open="toggleMenu"/>
      <router-view :openMenu="openMenu"/>
      <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
    name: 'App',
    data () {
      return {
        openMenu: false
      }
    },
    components: {
        Header,
        Footer,
    },
    methods: {
      toggleMenu (openMenu) {
        this.openMenu = openMenu
      }
    }
}
</script>

<style lang="scss">
@import '~@/assets/scss/global-resets.scss';
@import '~@/assets/scss/global-styles.scss';
</style>
