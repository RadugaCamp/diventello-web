<template>
  <div class="list">
    <div class="list__item"
      v-for="item in links"
      :key="item._id"
    >
      <router-link
        :to="`/song/${item._id}`"
        class="list__item"
      >{{item._id}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      links: []
    }
  },
  created () {
    fetch('http://localhost:8078/list', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(links => {
        this.links = links
      })
  }
}
</script>

<style lang="sass">
</style>
