<template>
  <div class="song" v-click-outside="clickOutsideWord">
    <div class="song__title">{{song.title}}</div>
    <div
      v-for="(row, rowIndex) in song.rows"
      :key="rowIndex"
      class="song__row"
      :class="{ 'has-chords': hasChordExist(row) }"
    >
      <span
        v-for="(wordInfo, wordIndex) in row"
        :key="wordIndex"
        class="word song__word"
      >
        <span
          v-for="(chord, chordIndex) in wordInfo.chords"
          :key="chordIndex"
          :class="chord.position"
          class="chord song__chord"
        >{{chord.value}}</span>
        <span
          @click="setChord([rowIndex, wordIndex])"
          class="word__content"
        >{{wordInfo.word}}</span>
        <span
          v-if="wordInfo.active"
          class="word__chord-box"
        >
          <input
            v-for="(chord, chordIndex) in wordInfo.chords"
            :key="chordIndex"
            v-model="chord.value"
            @keyup.enter="deactiveWords"
            @keyup.esc="deactiveWords"
            type="text"
          >
        </span>
      </span>
    </div>
    <hr>
    <div class="button">
      <button @click="saveItem">Сохранить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Song',
  data () {
    return {
      song: {},
      activeWordPath: []
    }
  },
  computed: {
    activeWord () {
      if (this.activeWordPath.length) {
        return this.getWord(this.activeWordPath)
      }
      return {}
    }
  },
  watch: {
    activeWordPath (path, oldPath) {
      if (path.join() !== oldPath.join()) {
        // Фильтруем только реально существующий путь
        if (oldPath.length === 2) {
          this.triggerWordActiveStatus(this.getWord(oldPath), false)
        }
      }
    }
  },
  created () {
    fetch(`http://localhost:8078/api/song/${this.$route.params.id}`)
      .then(res => res.json())
      .then(item => (this.song = item))
      .catch(console.log)
  },
  methods: {
    setChord (wordPath) {
      this.setActiveWordPath(wordPath)
      this.triggerWordActiveStatus(this.activeWord)
    },
    clickOutsideWord (event) {
      this.deactiveWords()
    },
    deactiveWords () {
      this.activeWordPath = []
    },

    /**
     * Helpers
     */
    getWord (path) {
      if (this.isCorrectWordPath(path)) {
        let [row, word] = path
        return this.song.rows[row][word]
      }
      throw new Error('Song comp: getWord method, wordPath is incorrect')
    },
    setActiveWordPath (path) {
      if (this.isCorrectWordPath(path)) {
        this.activeWordPath = path
      } else {
        throw new Error('Song comp: setActiveWordPath method, incorrect argument')
      }
    },
    triggerWordActiveStatus (item, status) {
      if (item) {
        if (typeof status === 'boolean') {
          item.active = status
        } else {
          item.active = !item.active
        }
      } else {
        throw new Error('Song comp: triggerActive method, item argument isn\'t exist')
      }
    },
    isCorrectWordPath (path) {
      return Array.isArray(path) && path.length === 2
    },
    saveItem () {
      fetch(`http://localhost:8078/api/song/${this.$route.params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          item: this.song
        })
      })
        .then(res => res.json())
        .then(console.log)
    },
    hasChordExist (row) {
      for (let index = 0; index < row.length; index++) {
        let item = row[index]
        if (item.chords.some(chord => !!chord.value)) {
          return true
        }
      }
      return false
    }
  },
  directives: {
    'click-outside': {
      bind (el, binding, vNode) {
        const handler = event => {
          const target = event.target
          if (el !== target && !el.contains(target)) {
            binding.value(event)
          }
        }

        el.__clickOutsideHandler__ = handler

        document.addEventListener('click', el.__clickOutsideHandler__)
      },
      unbind (el) {
        document.removeEventListener('click', el.__clickOutsideHandler__)
      }
    }
  }
}
</script>

<style lang="sass">
.song

  &__title
    font-size: 16px
    font-weight: bold
    margin-bottom: 14px

  &__row

  &__word
    padding-right: 6px

    &:last-child
      padding-right: 0

  &__row.has-chords
    margin-top: 10px

.word
  position: relative
  cursor: pointer

  &__chord-box
    width: 72px
    position: absolute
    top: -100%
    left: 0
    z-index: 1
    border: 1px solid red

    input
      width: 20px
      display: inline-block

.chord
  position: absolute
  top: -100%

  &.left
    left: 0

  &.right
    right: 0

  &.center
    left: 0
    right: 0
    margin: auto
    text-align: center
</style>
