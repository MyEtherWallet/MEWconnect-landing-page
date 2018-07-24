<template>
  <div class="topintro">
    <div class="page-container">
      <h1 class="topintro__header">
        Finally, a ‘hardware wallet’ without all the hardware
      </h1>
      <p class="topintro__sub-header">
        An official, free companion app for MyEtherWallet
        that helps you secure your funds as never before.
      </p>
      <img class="topintro__app-image" src="~@/assets/images/app.png">
      <div class="topintro__appstores">
        <a href="/"><div class="topintro__appstores__apple"></div></a>
        <a href="/"><div class="topintro__appstores__google"></div></a>
      </div>
      <p class="topintro__footage">
        Psst... while we are working hard to prepare MEWconnect
        for iOS for final release, you can
        <a href="mailto:support@myetherwallet.com?subject=MEWconnect iOS beta test request">drop us a line</a>
        and we will invite you to test our iOS Beta version.
      </p>
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

<style scoped lang="scss">
@import '~@/assets/scss/global-styles.scss';
@import 'TopIntro.scss';
</style>
