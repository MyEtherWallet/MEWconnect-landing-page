<template>
  <div class="footer">
    <div class="page-container">
      <div class="footer__footer-menu">
        <div class="footer__logo">
          <div class="mew-logo"></div>
        </div>
        <div>
          <ul>
            <li><a href="/">About</a></li>
            <li><a href="/">User guide</a></li>
            <li><a href="https://myetherwallet.github.io/knowledge-base/">Knowledge Base</a></li>
            <li><a href="#disclaimer">Disclaimer</a></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><a href="https://www.myetherwallet.com/">MyEtherWallet.com</a></li>
            <li><a href="https://team.myetherwallet.com/">Team</a></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><a href="/">Support</a></li>
            <li><a href="/">Privacy policy</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__note">
        <div class="social-buttons">
          <a href="https://www.facebook.com/myetherwallet"><span class="facebook"></span></a>
          <a href="https://www.twitter.com/@myetherwallet"><span class="twitter"></span></a>
          <a href="https://www.instagram.com/myetherwallet"><span class="instagram"></span></a>
          <a href="https://www.linkedin.com/company/myetherwallet"><span class="linkedin"></span></a>
          <a href="https://www.github.com/myetherwallet"><span class="github"></span></a>
          <a href="https://www.reddit.com/r/myetherwallet"><span class="reddit"></span></a>
          <a href="https://www.medium.com/@myetherwallet"><span class="medium"></span></a>
        </div>
        <div class="company-copyright">© 2018 MyEtherWallet, Inc</div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import 'Footer.scss';
</style>
