import ABOUT_DATA from '@/constants/ABOUT_DATA'
import About from '@/components/About.vue'

export default {
  path: ABOUT_DATA.path,
  component: About,
  props: {
    pageTitle: ABOUT_DATA.title
  }
}
