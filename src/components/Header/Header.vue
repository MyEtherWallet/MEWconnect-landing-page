<template>
  <div class="header page-container">
    <div class="header__container">
      <img src="~@/assets/images/logo.svg">
      <nav>
        <ul>
          <li>User Guide</li>
          <li>About</li>
          <li>
            MyEtherWallet
            <span class="header__menu-arrow"></span>
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
