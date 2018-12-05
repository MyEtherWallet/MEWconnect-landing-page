<template>
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

          <a href="javascript:void(0)" v-on:click="mobileMenuToggle" class="header__menu-open" :class="{'open': mobileMenuStatus}"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      mobileMenuStatus: false
    }
  },
  props: {},
  methods: {
    mobileMenuToggle: function(){
      this.mobileMenuStatus = !this.mobileMenuStatus
      this.$emit('open', this.mobileMenuStatus)
    }
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
