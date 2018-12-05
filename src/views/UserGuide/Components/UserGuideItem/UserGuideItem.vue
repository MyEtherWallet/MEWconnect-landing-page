<template>
  <div class="user-guide-item" :class="{'reverse': (index + 1) % 2 == 0}">
    <div class="user-guide-item__text">
      <h3>{{ item.name }}</h3>

      <ListItem v-for="(listItem, index) in item.list" :item="listItem" :index="index" :key="index" />
    </div>
    <div class="user-guide-item__image">
      <img v-if="item.image === 1" src="~@/assets/images/1.jpg" alt="" />
      <img v-if="item.image === 2" src="~@/assets/images/2.jpg" alt="" />
      <img v-if="item.image === 3" src="~@/assets/images/3.jpg" alt="" />
      <img v-if="item.image === 4" src="~@/assets/images/4.jpg" alt="" />
      <img v-if="item.image === 5" src="~@/assets/images/5.jpg" alt="" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ListItem from '../ListItem/ListItem.vue'
export default {
  name: 'UserGuideItem',
  props: ['item', 'index'],
  components: {
    ListItem
  }
}
</script>

<style lang="scss">
@import '~@/assets/scss/global-styles.scss';
@import 'UserGuideItem';
</style>