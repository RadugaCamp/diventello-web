<template>
  <common-view
    :pageTitle="pageTitle"
  ></common-view>
</template>

<script>
import CommonView from '@/components/CommonView'
export default {
  name: 'AboutView',
  components: {
    'common-view': CommonView
  },
  props: {
    pageTitle: {
      type: String
    }
  }
}
</script>
