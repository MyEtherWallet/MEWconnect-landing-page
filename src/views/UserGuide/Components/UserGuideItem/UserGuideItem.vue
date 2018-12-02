<template>
  <div class="user-guide-item">
    <h3>{{ item.name }}</h3>
      <div class="user-guide-item__video">
        <iframe width="100%" :src="item.code" frameborder="0" allowfullscreen></iframe>
      </div>
      <p>{{ item.text }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'UserGuideItem',
  props: ['item', 'index']
}
</script>

<style lang="scss">
@import '~@/assets/scss/global-styles.scss';
@import 'UserGuideItem';
</style>
