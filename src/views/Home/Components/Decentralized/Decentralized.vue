<template>
  <div class="decentralized">
    <div class="page-container">
      <h2 class="decentralized__block-title">
        Think de-centralized
      </h2>
      <div class="grid-block">
        <div>
          <div class="item-image-1"></div>
          <p class="item-title">No centralized servers</p>
          <p class="item-text">
            No databases. MEWconnect and MyEtherWallet
            talk via P2P communication.
          </p>
        </div>
        <div>
          <div class="item-image-2"></div>
          <p class="item-title">No data collection</p>
          <p class="item-text">
            MyEtherWallet can’t collect your personal
            data even if we wanted to.
            Don’t believe us?
            Check out our <a href="">privacy policy</a>.
          </p>
        </div>
        <div>
          <div class="item-image-3"></div>
          <p class="item-title">Open source</p>
          <p class="item-text">
            Transparent, free, and open source.
            We serve the community. Also, all our
            software is independently audited by
            the community.
            Check out our <a href="">source code</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'decentralized',
  components: {
  }
}
</script>

<style scoped lang="scss">
@import '~@/assets/scss/global-styles.scss';
@import 'Decentralized.scss';
</style>
