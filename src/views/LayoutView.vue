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
import TheHeader from '@/components/TheHeader'
import TheMenu from '@/components/TheMenu'
import TheFooter from '@/components/TheFooter'

export default {
  name: 'Layout',
  props: {
    pageTitle: {
      type: String
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
@import "@/styles/normalize.scss"

*
  box-sizing: border-box

.app

.page
  font-family: roboto, sans-serif
  line-height: 1.6
  width: 100%
  min-width: 320px
  max-width: 768px
  margin: 0 auto
  box-shadow: 0 0 30px -6px #ccc

  &__content
    padding: 30px 20px
</style>
