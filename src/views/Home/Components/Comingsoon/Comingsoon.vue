<template>
  <div class="last">
    <div class="container">
      <div class="row align-items-end">
        <div class="col-lg-6">
          <div class="last__phone">
            <img src="~@/assets/images/phone.png" alt="" />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="app__download">
            <div class="app__download-coming">Download from:</div>
            <div class="app__download-buttons">
              <a v-if="iPad" href="javascript:void(0)" @click="toStore">
                <img src="~@/assets/images/appstore.png" height="47" />
              </a>
              <a v-else href="https://itunes.apple.com/us/app/mewconnect/id1391097156">
                <img src="~@/assets/images/appstore.png" height="47" />
              </a>
              <a href="#" class="google-play"></a>
            </div>
            <div class="app__download-desc"><a href="mailto:MEWconnectBeta@MyEtherWallet.com?subject=MEWconnect Android Beta Request">Email us</a> if you want to check out MEWconnect Android Beta.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import platform from 'platform';

export default {
  name: 'comingsoon',
  data () {
    return {
      iPad: false
    }
  },
  mounted () {
    this.iPad = platform.product === 'iPad'
  },
  methods: {
    toStore() {
      if (window.confirm('MEWconnect is not optimized for iPad, we don\'t recommend using the app on this device')) {
         window.location.href = 'https://itunes.apple.com/us/app/mewconnect/id1391097156';
      }
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/scss/global-styles.scss';
@import 'Comingsoon.scss';
</style>
