<template>
  <div class="about-mew-connect">
    <div class="wrap">
      <div class="page-container">
        <div class="footer-content-container">
          <div class="copyright">
            <p>© 2018  <span>MyEtherWallet</span>. All rights reserved</p>
          </div>
          <div class="social-block">
            <a href="/"><i class="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="/"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            <a href="/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="/"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
            <a href="/"><i class="fa fa-github" aria-hidden="true"></i></a>
            <a href="/"><i class="fa fa-reddit-alien" aria-hidden="true"></i></a>
            <a href="/"><i class="fa fa-medium" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div> <!-- .wrap -->
  </div>
</template>

<script>
export default {
  name: 'AboutMewConnect',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'Footer';
</style>
