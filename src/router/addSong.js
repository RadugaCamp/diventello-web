import ADD_SONG_DATA from '@/constants/ADD_SONG_DATA'
import AddSong from '@/components/AddSong.vue'

export default {
  path: ADD_SONG_DATA.path,
  component: AddSong,
  props: {
    pageTitle: ADD_SONG_DATA.title
  }
}
