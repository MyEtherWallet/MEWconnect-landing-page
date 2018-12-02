<template>
  <div class="home">
    <TopIntro/>
    <UserGuide />
    <Security/>
    <Protect/>
    <Phishers/>
    <Decentralized/>
    <Mewteam/>
    <Comingsoon/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header/Header.vue'
import TopIntro from '@/views/Home/Components/TopIntro/TopIntro.vue'
import UserGuide from '@/views/Home/Components/UserGuide/UserGuide.vue'
import Security from '@/views/Home/Components/Security/Security.vue'
import Protect from '@/views/Home/Components/Protect/Protect.vue'
import Phishers from '@/views/Home/Components/Phishers/Phishers.vue'
import Decentralized from '@/views/Home/Components/Decentralized/Decentralized.vue'
import Mewteam from '@/views/Home/Components/Mewteam/Mewteam.vue'
import Comingsoon from '@/views/Home/Components/Comingsoon/Comingsoon.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
  name: 'home',
  components: {
    Header,
    TopIntro,
    UserGuide,
    Security,
    Protect,
    Phishers,
    Decentralized,
    Mewteam,
    Comingsoon,
    Footer
  }
}
</script>

<style scoped lang="scss">
@import 'Home.scss';
</style>
