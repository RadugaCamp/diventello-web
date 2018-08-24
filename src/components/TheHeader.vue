<template>
  <div class="header">
    <div class="header__title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="sass">
</style>
