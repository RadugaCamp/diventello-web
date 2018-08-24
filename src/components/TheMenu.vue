<template>
  <div class="menu">
    <div class="menu__title">Меню</div>
    <div class="menu__list">
      <div class="menu__item">
        <router-link class="menu__item" to="/about">О проекте</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheMenu',
  props: {
    show: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="sass">
</style>
