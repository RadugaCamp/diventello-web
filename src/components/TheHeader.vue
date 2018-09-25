<template>
  <div class="header">
    <div class="header__title">{{title}}</div>
    Шапка
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
.header
  border-bottom: 1px solid #ccc
</style>
