<template>
  <div class="form">
    <div>
      <label>
        Название:
        <input type="text" v-model="title">
      </label>
    </div>
    <div>
      <label>
        Текст:
        <textarea v-model="content"></textarea>
      </label>
    </div>
    <button @click="saveItem">Сохранить</button>
  </div>
</template>

<script>
export default {
  name: 'AddSong',
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    saveItem () {
      let item = {
        title: this.title,
        rows: this.convertText(this.content)
      }

      fetch(`http://localhost:8078/api/song`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item })
      })
        .then(res => res.json())
        .then(res => {
          let id = res.result._id
          if (id) {
            this.$router.push({path: `/song/${id}`})
          } else {
            throw new Error('не добавился объект')
          }
        })
    },
    convertText (content) {
      return content
        .split('\n')
        .filter(row => row !== '\r')
        .map(row => row.replace('\r', ''))
        .map(row => row
          .split(' ')
          .map(word => ({
            word,
            active: false,
            chords: [
              {
                value: '',
                position: 'left'
              },
              {
                value: '',
                position: 'center'
              },
              {
                value: '',
                position: 'right'
              }
            ]
          }))
        )
    }
  }
}
</script>

<style lang="sass">
</style>
