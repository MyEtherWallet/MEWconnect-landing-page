<template>
  <div class="user-guide-item" :class="{'reverse': (index + 1) % 2 == 0}">
    <div class="user-guide-item__text">
        <h3>{{ item.name }}</h3>

        <ListItem v-for="(listItem, index) in item.list" :item="listItem" :index="index" :key="index" />
    </div>
    <div class="user-guide-item__image">
        <img :src="item.image" alt="" />
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
