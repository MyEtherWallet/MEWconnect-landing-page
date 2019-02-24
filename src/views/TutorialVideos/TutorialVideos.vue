<template>
  <div class="tutorial-videos">
      <div class="container">
          <div class="row">
              <div class="col-lg-12">
                  <h2>MEWconnect Tutorial Videos</h2>
                  <div class="tutorial-videos__toggle">
                      <a @click="toggleVideo" href="javascript:void(0)" :class="{'active': !vintage}">MEW videos</a>
                      <a @click="toggleVideo" href="javascript:void(0)" :class="{'active': vintage}">MEW vintage videos</a>
                  </div>
                  <div class="tutorial-videos__wrap" v-show="!vintage">
                      <TutorialVideoItem v-for="(item, index) in items" :item="item" :index="index" :key="index" />
                  </div>
                  <div class="tutorial-videos__wrap" v-show="vintage">
                      <TutorialVideoItem v-for="(item, index) in vintages" :item="item" :index="index" :key="index" />
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TutorialVideoItem from './Components/TutorialVideoItem/TutorialVideoItem.vue'

export default {
  name: 'tutorial-videos',
  data () {
      return {
        vintage: false,
        items: [
          {
            name: 'MEWconnect 101: Create a wallet',
            code: 'https://www.youtube.com/embed/p2q6qrcKtj8',
            text: 'In this video, we teach users how to create a new Ethereum wallet on our MEWconnect smartphone app.'
          },
          {
            name: 'MEWconnect 101: Back up your wallet',
            code: 'https://www.youtube.com/embed/1aZANjFEQ7I',
            text: 'In this video, we teach users how to back up their MEWconnect wallet. WRITE DOWN THOSE RECOVERY WORDS! '
          },
          {
            name: 'MEWconnect 101: Connect to MEW',
            code: 'https://www.youtube.com/embed/OAjq6Rh5itY',
            text: 'In this video, we teach users how to connect their MEWconnect wallet with our interface, MyEtherWallet! '
          },
          {
            name: 'MEWconnect 101: Make a transaction',
            code: 'https://www.youtube.com/embed/_u5-kUPn3vw',
            text: 'In this video, we teach users how to transfer funds using their MEWconnect wallet and our interface, MyEtherWallet! '
          },
          {
            name: 'MEWconnect 101: Wallet overview',
            code: 'https://www.youtube.com/embed/RjgxxNgTBGM',
            text: 'In this video, we explore the in\'s and out\'s of the MEWconnect app.  '
          },
        ],
        vintages: [
          {
              name: 'MEWconnect 101: Create a wallet vintage',
              code: 'https://www.youtube.com/embed/p2q6qrcKtj8',
              text: 'In this video, we teach users how to create a new Ethereum wallet on our MEWconnect smartphone app.'
          },
          {
              name: 'MEWconnect 101: Back up your wallet vintage',
              code: 'https://www.youtube.com/embed/1aZANjFEQ7I',
              text: 'In this video, we teach users how to back up their MEWconnect wallet. WRITE DOWN THOSE RECOVERY WORDS! '
          },
          {
              name: 'MEWconnect 101: Connect to MEW vintage',
              code: 'https://www.youtube.com/embed/IuyfpsYTZrI',
              text: 'In this video, we teach users how to connect their MEWconnect wallet with our interface, MyEtherWallet! '
          },
          {
              name: 'MEWconnect 101: Make a transaction vintage',
              code: 'https://www.youtube.com/embed/nMefcCPr2ZU',
              text: 'In this video, we teach users how to transfer funds using their MEWconnect wallet and our interface, MyEtherWallet! '
          },
          {
              name: 'MEWconnect 101: Wallet overview vintage',
              code: 'https://www.youtube.com/embed/RjgxxNgTBGM',
              text: 'In this video, we explore the in\'s and out\'s of the MEWconnect app.  '
          },
        ]
      }
  },
  methods: {
      toggleVideo() {
          this.vintage = !this.vintage
      }
  },
  components: {
      TutorialVideoItem
  }
}
</script>

<style lang="scss">
@import 'TutorialVideos';
</style>
