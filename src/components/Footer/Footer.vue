<template>
  <div class="footer" :class="{ 'open': openMenu }">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <a href="https://www.myetherwallet.com" class="footer__logo"></a>
        </div>

        <div class="col-lg-3">
          <router-link to="/about" class="footer__link">About</router-link>
          <router-link to="/user-guide" class="footer__link">User Guide</router-link>
          <a href="https://kb.myetherwallet.com" class="footer__link">Knowledge Base</a>
        </div>

        <div class="col-lg-3">
          <a href="https://www.myetherwallet.com/" class="footer__link">MyEtherWallet.com</a>
          <a href="https://team.myetherwallet.com/" class="footer__link">Team</a>
        </div>

        <div class="col-lg-3">
          <a href="mailto:support@myetherwallet.com?subject=MEWconnect website support request" class="footer__link">Support</a>
          <a href="https://www.myetherwallet.com/privacy-policy.html" class="footer__link">Privacy policy</a>
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
