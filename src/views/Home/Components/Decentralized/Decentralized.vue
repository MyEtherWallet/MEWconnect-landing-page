<template>
  <div class="p2p">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <h2 class="p2p__title">Think de-centralized</h2>

          <div class="row">
            <div class="col-lg-4">
              <div class="p2p__item">
                <div class="p2p__item-icon p2p__item-icon--p2p"></div>
                <h4>No centralized servers for communication</h4>
                <p>No databases. MEWconnect and MyEtherWallet talk via P2P communication.</p>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="p2p__item">
                <div class="p2p__item-icon p2p__item-icon--no-data"></div>
                <h4>No data collection</h4>
                <p>MyEtherWallet can’t collect your personal data even if we wanted to.<br />Don’t believe us?<br />Check out our <a href="https://www.myetherwallet.com/privacy-policy.html">privacy policy</a>.</p>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="p2p__item p2p__item--last">
                <div class="p2p__item-icon p2p__item-icon--comunity"></div>
                <h4>Open source</h4>
                <p>Transparent, free, and open source. We serve the community. Also, all our software is independently audited by the community.<br />Check out our <a href="https://github.com/MyEtherWallet/MEWconnect">source code</a>.</p>
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
  name: 'decentralized',
  components: {
  }
}
</script>

<style scoped lang="scss">
@import '~@/assets/scss/global-styles.scss';
@import 'Decentralized.scss';
</style>
