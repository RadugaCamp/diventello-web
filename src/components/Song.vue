<template>
  <div class="song has-chords">
    <div v-for="(row, index) in song.rows" :key="index" class="song__row">
      <span v-for="(wordItem, index) in row" :key="index" class="word song__word">
        <span v-for="(chord, index) in wordItem.chords" :key="index" :class="chord.position" class="chord song__chord">{{chord.value}}</span>
        <span class="word__content">{{wordItem.word}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Song',
  data () {
    return {
      song: {}
    }
  },
  created () {
    this.song = {
      rows: [
        [
          { word: 'Не' },
          {
            word: 'горюй,',
            chords: [
              {
                value: 'C',
                position: 'center'
              }
            ]
          },
          { word: 'когда' },
          { word: 'не' },
          {
            word: 'везет,',
            chords: [
              {
                value: 'Am',
                position: 'center'
              }
            ]
          }
        ],
        [
          { word: 'И' },
          {
            word: 'когда',
            chords: [
              {
                value: 'Dm',
                position: 'center'
              }
            ]
          },
          { word: 'ты' },
          { word: 'кому-то' },
          { word: 'не' },
          {
            word: 'нравишься,',
            chords: [
              {
                value: 'G',
                position: 'center'
              }
            ]
          }
        ],
        [
          { word: 'И' },
          { word: 'когда' },
          { word: 'душа' },
          { word: 'не' },
          { word: 'поет' }
        ],
        [
          { word: 'И' },
          { word: 'друзья' },
          { word: 'твои' },
          { word: 'разбегаются,' }
        ],
        [
          { word: 'И' },
          { word: 'погода' },
          { word: 'прячет' },
          { word: 'солнце' }
        ],
        [
          { word: 'От' },
          { word: 'тебя' },
          { word: 'на' },
          { word: 'зло,' }
        ],
        [
          { word: 'И' },
          { word: 'тебе' },
          { word: 'ответил' },
          { word: 'кто-то' }
        ],
        [
          { word: 'Больно' },
          { word: 'и' },
          { word: 'зло.' }
        ]
      ]
    }
  }
}
</script>

<style lang="sass">
.song

  &__row
    margin-bottom: 10px

  &__word
    padding-right: 6px

    &:last-child
      padding-right: 0

  &.has-chords &__row
    margin-top: 30px
    margin-bottom: 30px

.word
  position: relative

.chord
  top: -70%
  position: absolute

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
