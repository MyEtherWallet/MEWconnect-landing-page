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
            <div class="app__download-coming">Coming soon</div>
            <div class="app__download-buttons">
              <a href="#" class="add-store"></a>
              <a href="#" class="google-play"></a>
            </div>
            <div class="app__download-desc"><a href="mailto:mewconnectBeta@MyEtherWallet.com?subject=MEWconnect iOS beta test request">Email us</a> if you want to check out MEWconnect&nbsp;Beta.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'comingsoon',
  components: {
  }
}
</script>

<style lang="scss">
@import '~@/assets/scss/global-styles.scss';
@import 'Comingsoon.scss';
</style>
