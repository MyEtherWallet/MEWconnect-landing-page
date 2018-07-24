<template>
  <div class="phishers">
    <div class="page-container">
      <div class="phishers__block-image"></div>
      <h2 class="phishers__block-title">
        Phishers will have to phish somewhere else
      </h2>
      <p class="phishers__block-text">
        No one can obtain your private key.
        MEWconnect is official MyEtherWallet software.
        You can <a href="">check the validity of the app</a> yourself.
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'phishers',
  components: {
  }
}
</script>

<style scoped lang="scss">
@import '~@/assets/scss/global-styles.scss';
@import 'Phishers.scss';
</style>
