<template>
  <div class="footer" :class="{ 'open': openMenu }">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <a href="https:// www.myetherwallet.com" class="footer__logo"></a>
        </div>

        <div class="col-lg-3">
          <a href="#" class="footer__link">About</a>
          <a href="#" class="footer__link">User guide</a>
          <a href="https://myetherwallet.github.io/knowledge-base/" class="footer__link">Knowledge Base</a>
          <a href="#disclaimer" class="footer__link fancybox">Disclaimer</a>
        </div>

        <div class="col-lg-3">
          <a href="https://www.myetherwallet.com/" class="footer__link">MyEtherWallet.com</a>
          <a href="https://team.myetherwallet.com/" class="footer__link">Team</a>
        </div>

        <div class="col-lg-3">
          <a href="mailto:support@myetherwallet.com?subject=MEWconnect website support request" class="footer__link">Support</a>
          <a href="#" class="footer__link">Privacy policy</a>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="footer__copy">© 2018 MyEtherWallet, Inc</div>
        </div>
        <div class="col-lg-6">
          <div class="footer__social">
            <a href="https://www.facebook.com/MyEtherWallet/" class="fb"></a>
            <a href="https://twitter.com/myetherwallet" class="tw"></a>
            <a href="https://www.instagram.com/myetherwallet/" class="inst"></a>
            <a href="https://www.linkedin.com/company/myetherwallet" class="lin"></a>
            <a href="https://github.com/MyEtherWallet" class="gh"></a>
            <a href="https://www.reddit.com/r/MyEtherWallet/" class="rt"></a>
            <a href="https://medium.com/@myetherwallet" class="md"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: ['openMenu']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import 'Footer.scss';
</style>
