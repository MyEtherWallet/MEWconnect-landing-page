<template>
  <div class="top-banner">
    <div class="wrap">
      <div class="page-container">
        <ul class="banner-content-container">
          <li class="banner-text-container">
            <h1 class="large-title">Coming This Summer...</h1>
            <div class="banner-flag">
              <img class="background-image" src="~@/assets/imgs/TopBanner/flag.png" alt="MEWconnect">
            </div>
            <h5 class="banner-article">
              Put the security of cold-storage right on your phone. Manage your wealth with all of the protection and none of the hassle with MEWconnect.
            </h5>
            <h5 class="powered-by">Powered by: <span>MyEtherWallet</span></h5>
            <h5 class="follow-us">For updates, please follow us on:</h5>
            <div class="social-block">
              <a href="https://www.facebook.com/MyEtherWallet/" target="_blank"><i class="fa fa-facebook text-color-white" aria-hidden="true"></i></a>
              <a href="https://twitter.com/myetherwallet" target="_blank"><i class="fa fa-twitter text-color-white" aria-hidden="true"></i></a>
              <a href="https://www.instagram.com/myetherwallet/" target="_blank"><i class="fa fa-instagram text-color-white" aria-hidden="true"></i></a>
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
