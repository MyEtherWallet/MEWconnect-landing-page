<template>
  <div class="user-guide-home">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <router-link to="/tutorial-videos" class="user-guide-home__link">
            <img src="~@/assets/images/user-guide.png" alt>
          </router-link>
          <div class="user-guide-home__text">
            <h3>Tutorial Videos</h3>
            <p>This is our informational series dedicated to showing users all the workings of our MEWconnect smartphone app.
              <router-link to="/tutorial-videos">Learn more.</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "user-guide-home",
  data() {
    return {
      autoPlay: false
    };
  },
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
@import "~@/assets/scss/global-styles.scss";
@import "UserGide.scss";
</style>
