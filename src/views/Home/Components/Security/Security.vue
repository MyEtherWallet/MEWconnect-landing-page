<template>
  <div class="security">
    <div class="page-container">
      <div class="security__block-image"></div>
      <h2 class="security__block-title">
        Hardware wallet-style security features
      </h2>
      <p class="security__block-text">
        MEWconnect stores your private keys safely in a <span>local,
        isolated, and secure vault</span> on your device to protect
        your account like the ELEVENTEEN GOOGILLION dollars
        it will one day be worth (probably).
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'security',
  components: {
  }
}
</script>

<style scoped lang="scss">
@import '~@/assets/scss/global-styles.scss';
@import 'Security.scss';
</style>
