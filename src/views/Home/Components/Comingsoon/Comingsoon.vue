<template>
  <div class="last">
    <div class="container">
      <div class="row align-items-end">
        <div class="col-lg-6">
          <div class="last__phone">
            <img src="~@/assets/images/phone.png" alt>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="app__download">
            <div class="app__download-coming">Get the app</div>
            <div class="app__download-buttons">
              <a v-if="iPad" href="javascript:void(0)" @click="toStore">
                <img src="~@/assets/images/App_Store_Badge.svg" height="47">
              </a>
              <a v-else href="https://itunes.apple.com/us/app/mewconnect/id1391097156">
                <img src="~@/assets/images/App_Store_Badge.svg" height="47">
              </a>
              <a href="#">
                <img src="~@/assets/images/google-play-badge-2.svg" height="47">
              </a>
            </div>
            <div class="app__download-desc"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import platform from "platform";

export default {
  name: "comingsoon",
  data() {
    return {
      iPad: false
    };
  },
  mounted() {
    this.iPad = platform.product === "iPad";
  },
  methods: {
    toStore() {
      if (
        window.confirm(
          "MEWconnect is not optimized for iPad, we don't recommend using the app on this device"
        )
      ) {
        window.location.href =
          "https://itunes.apple.com/us/app/mewconnect/id1391097156";
      }
    }
  }
};
</script>

<style lang="scss">
@import "~@/assets/scss/global-styles.scss";
@import "Comingsoon.scss";
</style>
