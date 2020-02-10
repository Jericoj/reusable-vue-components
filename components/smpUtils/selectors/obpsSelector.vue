/* eslint no-eval: 0 */
<template>
<div>
  <template>
    <ods-select :clearable="clearable" v-model="dataSelected" :placeholder="$tc('general.select', '')" :size="size" @blur="emitBlur" @focus="emitFocus">
      <ods-option v-for="item in dataOptions" :key="item.value" :label="item.label" :value="item.value">
      </ods-option>
    </ods-select>
  </template>
  <!--template v-else>
    <ods-select :clearable="clearable" v-model="dataSelected" :placeholder="$tc('general.select', '')" :size="size" @blur="emitBlur" @focus="emitFocus">
      <ods-option v-for="item in dataOptions" :key="item.value" :label="item.label" :value="item.value">
      </ods-option>
    </ods-select>
  </template -->
</div>
</template>
<script type='text/javascript'>

import $axios from '../../smpStore/ApiConnection.js'
export default {
  name: 'obps-selector',
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
    size: {
      type: String,
      default: 'deci'
    },
    clearable: {
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
      dataSelected: ''
    }
  },
  created () {
    this.fetchContent(this.apiEndPoint, this.dataForm)
  },
  mounted () {
    // this.valueSelect = this.value
  },
  watch: {
    loaded () {
      this.dataOptions = this.mountTable(this.loaded.body)
      // console.log('obps-selector: dataOptions= ' +  JSON.stringify(this.dataOptions, null, 4))
    },
    dataSelected () {
      // console.log('obps-selector: valueSelected = ' + this.dataSelected)
      this.$emit('dataSelected', this.dataSelected)
    },
    errors () {
      // console.log('obps-selector: loaded= ' +  JSON.stringify(this.errors, null, 4))
    }
  },
  computed: {
  },
  methods: {
    emitBlur () {
      // console.log('obps-selector: emitBlur')
      this.$emit('blur')
    },
    emitFocus () {
      // console.log('obps-selector: emitFocus')
      this.$emit('focus')
    },
    fetchContent: function (apiEndpoint, data) {
      $axios
        .post(apiEndpoint, data)
        .then(response => {
          this.loaded = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    mountTable (tableData) {
      let vm = this
      return tableData.map(function (p) {
        // console.log('obps-selector: mountTable= ' +  JSON.stringify(p, null, 4))
        var obj = {}
        // console.log ('mountTable: ' + p[`${vm.arrayItems.label}`])
        obj.label = p[`${vm.arrayItems.value}`] + ' - ' + p[`${vm.arrayItems.label}`]
        obj.value = p[`${vm.arrayItems.value}`]
        return obj
      })
    }
  }
}
</script>
