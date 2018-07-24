<template>
  <div class="comingsoon">
    <div class="page-container">
      <div class="comingsoon__grid-container">
        <div class="phone-image">
          <div class="image"></div>
        </div>
        <div class="comingsoon-text">
          <h2>Coming soon</h2>
          <div class="appstores">
            <div class="apple"></div>
            <div class="google"></div>
          </div>
          <p><a href="mailto:support@myetherwallet.com?subject=MEWconnect iOS beta test request">Email us</a> if you want to check out MEWconnect Beta.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'comingsoon',
  components: {
  }
};
</script>

<style scoped lang="scss">
@import '~@/assets/scss/global-styles.scss';
@import 'Comingsoon.scss';
</style>
