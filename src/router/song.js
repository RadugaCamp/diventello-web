import SONG_DATA from '@/constants/SONG_DATA'
import Song from '@/components/Song.vue'

export default {
  path: SONG_DATA.path,
  component: Song,
  props: {
    pageTitle: SONG_DATA.title
  }
}
