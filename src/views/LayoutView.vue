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
.page
  font-family: Arial, sans-serif
  color: #2c3e50

  &__content
    background: #acb
</style>
