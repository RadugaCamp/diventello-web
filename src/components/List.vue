<template>
  <div class="list">
    <div class="list__item"
      v-for="item in links"
      :key="item._id"
    >
      <router-link
        :to="`/song/${item._id}`"
        class="list__item"
      >{{item.title}}</router-link>
      <span @click.self="removeItem(item)"> | Удалить</span>
    </div>
    <div v-if="!links.length">Песен нет</div>
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
    fetch('http://localhost:8078/api/list')
      .then(res => res.json())
      .then(res => {
        let { result: { list } } = res
        this.links = list
      })
      .catch(console.log)
  },
  methods: {
    removeItem (item) {
      fetch(`http://localhost:8078/api/song/${item._id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(({ result }) => {
          let index = this.links.findIndex(item => item._id === result.id)
          if (index !== -1) {
            this.links.splice(index, 1)
          }
        })
    }
  }
}
</script>

<style lang="sass">
</style>
