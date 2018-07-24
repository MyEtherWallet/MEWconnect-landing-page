<template>
  <div class="header page-container">
    <div class="header__container">
      <router-link to="/"><img src="~@/assets/images/logo.svg"></router-link>
      <nav>
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
</template>

<script>
export default {
  name: 'Header',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import 'Header.scss';
</style>
