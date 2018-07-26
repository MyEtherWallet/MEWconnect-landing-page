<template>
  <div class="topintro">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="title">
            <h1>Finally, a ‘hardware wallet’ without all the hardware</h1>
            <p>An official, free companion app for MyEtherWallet that helps you secure your funds as never before.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="app">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <img src="~@/assets/images/app.png" alt="" />
            <div class="app__download">
              <div class="app__download-buttons">
                <a href="#" class="add-store"></a>
                <a href="#" class="google-play"></a>
              </div>

              <div class="app__download-desc">
                Psst... while we are working hard to prepare MEWconnect for iOS for final release, you can <a href="mailto:support@myetherwallet.com?subject=MEWconnect iOS beta test request">drop us a line</a> and we will invite you to test our iOS Beta version.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'topintro',
  components: {
  }
}
</script>

<style lang="scss">
@import '~@/assets/scss/global-styles.scss';
@import 'TopIntro.scss';
</style>
