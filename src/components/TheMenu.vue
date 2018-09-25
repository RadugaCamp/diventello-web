<template>
  <div class="menu">
    <div class="menu__list">
      <div
        class="menu__item"
        v-for="item in items"
        :key="item.path"
      >
        <router-link :to="item.path">{{item.title}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import MENU_DATA from '@/constants/MENU_DATA'

export default {
  name: 'TheMenu',
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      items: MENU_DATA
    }
  }
}
</script>

<style lang="sass">
.menu
  background: #ccc
  text-align: center

  &__item
    padding: 10px 20px
    position: relative
    display: inline-block

    a
      color: #2c3e50
      text-decoration: none

      &.router-link-exact-active
        color: #42b983
</style>
