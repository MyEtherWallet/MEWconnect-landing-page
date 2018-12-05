<template>
  <div class="tutorial-video-item">
    <h3>{{ item.name }}</h3>
      <div class="tutorial-video-item__video">
        <iframe width="100%" :src="item.code" frameborder="0" allowfullscreen></iframe>
      </div>
      <p>{{ item.text }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'TutorialVideoItem',
  props: ['item', 'index']
}
</script>

<style lang="scss">
@import '~@/assets/scss/global-styles.scss';
@import 'TutorialVideoItem';
</style>
