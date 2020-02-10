<template>
  <ods-input
  :placeholder="$t('general.placeolder')"
  v-model="dataShowText"
  auto-complete="on"
  :disabled='isDisabled'>
  </ods-input>
</template>
<script type='text/javascript'>

import $axios from '../../smpStore/ApiConnection.js'
export default {
  name: 'obps-input',
  props: {
    apiEndPoint: {
      type: String,
      required: true
    },
    dataForm: {
      type: Object,
      required: true
    },
    arrayItems: {
      type: Object,
      required: true
    },
    isDisabled: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      loaded: [],
      current: 0,
      errors: [],
      dataOptions: [],
      dataShowText: ''
    }
  },
  created () {
    this.fetchContent(this.apiEndPoint, this.dataForm)
  },
  watch: {
    loaded () {
      this.dataShowText = this.dataShow
      // console.log('obps-input: dataOptions= ' + JSON.stringify(this.dataOptions, null, 4))
    },
    errors () {
      // console.log('obps-input: loaded= ' +  JSON.stringify(this.errors, null, 4))
    }
  },
  computed: {
    dataShow () {
      let text = ''
      // console.log('arrayItems')
      // console.log(this.arrayItems)
      // console.log('loaded')
      // console.log(this.loaded)
      for (let item in this.arrayItems) {
        text += this.loaded[item] + ' '
      }
      // console.log(text)
      return text
    }
  },
  methods: {
    fetchContent: function (apiEndpoint, data) {
      $axios.post(apiEndpoint, data).then(response => {
        this.loaded = response.data.body
      }).catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>
