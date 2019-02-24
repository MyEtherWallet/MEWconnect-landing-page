<template>
  <div class="header-wrap" :class="{'fixed': fixed}">
    <div class="container h-wrap">
      <div class="row">
        <div class="col-lg-12">
          <div class="header">
            <router-link to="/" class="logo"><img src="~@/assets/images/logo.png" alt="" /></router-link>

            <div class="header__menu" :class="{'open': mobileMenuStatus}">
              <router-link to="/">Home</router-link>
              <router-link to="/tutorial-videos">Tutorial Videos</router-link>
              <router-link to="/user-guide">User Guide</router-link>
              <router-link to="/about">About</router-link>
              <a href="https://www.myetherwallet.com/">MyEtherWallet <span class="header__menu-arrow"></span></a>
            </div>

            <div class="header__download" :class="{'open': mobileMenuStatus}">
              <a v-if="iPad" href="javascript:void(0)" @click="toStore" class="add-store">
                <img src="~@/assets/images/App_Store_Badge.svg" height="47">
              </a>
              <a
                v-else
                href="https://itunes.apple.com/us/app/mewconnect/id1391097156"
                class="add-store"
              >
                <img src="~@/assets/images/App_Store_Badge.svg" height="47">
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.myetherwallet.mewconnect" class="add-store">
                <img src="~@/assets/images/google-play-badge-2.svg" height="47">
              </a>
            </div>

            <a href="javascript:void(0)" v-on:click="mobileMenuToggle" class="header__menu-open" :class="{'open': mobileMenuStatus}"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import platform from "platform";

export default {
  name: 'Header',
  data() {
    return {
      mobileMenuStatus: false,
      fixed: false,
      iPad: false

    }
  },
  props: {},
  mounted() {
    this.iPad = platform.product === "iPad";
  },
  methods: {
    mobileMenuToggle: function(){
      this.mobileMenuStatus = !this.mobileMenuStatus
      this.$emit('open', this.mobileMenuStatus)
    },
    handleScroll () {
      this.fixed = window.scrollY > 140

      if(this.fixed) { document.body.classList.add("fixed"); }else{ document.body.classList.remove("fixed"); }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  watch: {
    '$route' () {
      this.mobileMenuStatus = false
      this.$emit('open', this.mobileMenuStatus)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import 'Header.scss';
</style>
