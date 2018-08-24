<template>
  <div class="menu">
    <div class="menu__list">
      <div
        class="menu__item"
        v-for="item in items"
        :key="item.path"
      >
        <router-link
          class="menu__item"
          :to="item.path"
        >{{item.title}}</router-link>
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
  padding: 30px
  border: 1px solid #cad

  a
    font-weight: bold
    color: #2c3e50

    &.router-link-exact-active
      color: #42b983
</style>
