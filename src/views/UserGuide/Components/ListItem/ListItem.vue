<template>
  <div class="list-item">
    <div class="list-item__text"><span>{{ index + 1 }}.</span><div v-html="item.text"></div></div>
    <div class="list-item__description" v-if="item.description.length > 0" v-html="item.description"></div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'ListItem',
  props: ['item', 'index'],
}
</script>

<style lang="scss">
@import '~@/assets/scss/global-styles.scss';
@import 'ListItem';
</style>