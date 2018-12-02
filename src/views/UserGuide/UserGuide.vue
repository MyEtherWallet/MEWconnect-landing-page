<template>
  <div class="user-guide">
      <div class="container">
          <div class="row">
              <div class="col-lg-12">
                  <h2>MEWconnect User Guide</h2>
                  <UserGuideItem v-for="(item, index) in items" :item="item" :index="index" :key="index" />

                  <div class="user-guide__help">
                      <p>To download the MEWconnect app, visit <a href="https://mewconnect.myetherwallet.com/">mewconnect.myetherwallet.com</a>.</p>

                      <h3>Questions or Concerns?</h3>
                      <p> Email us at: <a href="mailto:mewconnectBeta@MyEtherWallet.com?subject=MEWconnect iOS beta test request">MEWconnectsupport@myetherwallet.com</a></p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import UserGuideItem from './Components/UserGuideItem/UserGuideItem.vue'

export default {
  name: 'user-guide',
  data () {
      return {
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
            code: 'https://www.youtube.com/embed/IuyfpsYTZrI',
            text: 'In this video, we teach users how to connect their MEWconnect wallet with our interface, MyEtherWallet! '
          },
          {
            name: 'MEWconnect 101: Make a transaction',
            code: 'https://www.youtube.com/embed/nMefcCPr2ZU',
            text: 'In this video, we teach users how to transfer funds using their MEWconnect wallet and our interface, MyEtherWallet! '
          },
          {
            name: 'MEWconnect 101: Wallet overview',
            code: 'https://www.youtube.com/embed/RjgxxNgTBGM',
            text: 'In this video, we explore the in\'s and out\'s of the MEWconnect app.  '
          },
        ]
      }
  },
  components: {
    UserGuideItem
  }
}
</script>

<style lang="scss">
@import 'UserGuide';
</style>
