<template>
  <div class="header">
    <div class="page-container">
      <div class="mobile-menu-button" v-on:click="mobileMenuToggle"></div>
      <div class="header__container">
        <router-link to="/"><img class="header__logo-image" src="~@/assets/images/logo.svg"></router-link>
        <nav class="desktop-menu">
          <ul>
            <li><a href="">User Guide</a></li>
            <li><a href="">About</a></li>
            <li>
              <a href="">
                MyEtherWallet
                <span class="header__menu-arrow"></span>
              </a>
            </li>
          </ul>
        </nav>
        <nav class="mobile-menu" v-if="mobileMenuStatus">
          <ul>
            <li><a href="">User Guide</a></li>
            <li><a href="">About</a></li>
            <li>
              <a href="">
                MyEtherWallet
                <span class="header__menu-arrow"></span>
              </a>
            </li>
          </ul>
        </nav>
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
  props: {
  },
  methods: {
    mobileMenuToggle: function(){
      this.mobileMenuStatus = !this.mobileMenuStatus
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import 'Header.scss';
</style>
