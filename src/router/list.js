import LIST_DATA from '@/constants/LIST_DATA'
import List from '@/components/List.vue'

export default {
  path: LIST_DATA.path,
  component: List,
  props: {
    pageTitle: LIST_DATA.title
  }
}
