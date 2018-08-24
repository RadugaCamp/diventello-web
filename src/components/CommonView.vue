<template>
  <div class="page" :class="showMenu && 'page_show-menu'">
    <TheMenu
      :class="showMenu && 'menu_show'"
      :show="showMenu"
      @click="toggleMenu"
    ></TheMenu>
    <TheHeader
      :title="pageTitle"
    ></TheHeader>
    <div class="page__content">
      <router-view></router-view>
    </div>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from './TheHeader'
import TheMenu from './TheMenu'
import TheFooter from './TheFooter'

export default {
  name: 'CommonView',
  props: {
    pageTitle: {
      type: String,
      default: ''
    }
  },
  components: { TheHeader, TheMenu, TheFooter },
  data () {
    return {
      showMenu: true
    }
  },
  methods: {
    toggleMenu () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style lang="sass">
</style>
