<template>
  <div class="top-banner">
    <div class="wrap">
      <div class="page-container">
        <ul class="banner-content-container">
          <li class="banner-text-container">
            <h2 class="large-title">Coming Soon...</h2>
            <div class="banner-flag">
              <img class="background-image" src="~@/assets/imgs/TopBanner/flag.png" alt="MEWconnect">
            </div>
            <h5 class="banner-article">
              A free app that gives you security similar to cold-storage
              with none of the hassle. Build and manage your future
              wealth with MyEtherWallet.
            </h5>
            <h5 class="powered-by">Powered by: <span>MyEtherWallet</span></h5>
            <h5 class="follow-us">For updates, please follow us on:</h5>
            <div class="social-block">
              <a href="https://facebook.com"><i class="fa fa-facebook text-color-white" aria-hidden="true"></i></a>
              <a href="https://twitter.com"><i class="fa fa-twitter text-color-white" aria-hidden="true"></i></a>
              <a href="https://instagram.com"><i class="fa fa-instagram text-color-white" aria-hidden="true"></i></a>
            </div>
          </li>
          <li class="banner-image-container">
            <img class="background-image" src="~@/assets/imgs/TopBanner/ipx.png" alt="Mobile">
          </li>
        </ul> <!-- .banner-content-container -->
      </div> <!-- .page-container -->

    </div> <!-- .wrap -->
  </div>
</template>

<script>
export default {
  name: 'TopBanner',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'TopBanner';
</style>
