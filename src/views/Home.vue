<template>
  <div class="home">
    <img src="../assets/images/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped lang="scss">
@import 'Home.scss';
</style>
