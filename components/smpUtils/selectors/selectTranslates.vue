<!--
  Para el uso del selcect generio es necesario pasarle 3 parametros.
    item -> el campo del modelo que se quiere rellenar
    isDisbled -> si esta deshabilitado (usado en el caso de que se muestre solo informacion)
    selectField -> el nombre del campo usado con el cual se hara la peticion y obtener las opciones
  Ver tambien el correspondiente fichero que almacena la informacion de la peticion
    store/general-parameters/translates.js
 -->
<template>
  <ods-select @change="selectedItem" v-model="selectItem" auto-complete="dso_dfc_tip_cd" :disabled="isDisabled" :placeholder="$t('general.select')">
    <template v-for="field in fields">
      <ods-option :key="field.valor_dato" :label="field.valor_dato_ds" :value="field.valor_dato"></ods-option>
    </template>
  </ods-select>
</template>
<script type="text/javascript">
import { mapGetters } from 'vuex'
export default{
  props: {
    item: {
      type: String,
      required: true
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    selectField: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      fields: [],
      itemSelected: '',
      acction: 'showAll',
      showDialog: false,
      currentPage: 1,
      itemsPerPage: 20,
      totalFields: 0,
      search: '',
      response: null,
      formData: {
        chequeo_tabla: '',
        cod_idioma: 'ES',
        nombre_dato: '',
        requestBase: {
          entity: '',
          office: '',
          paginationKey: '0',
          tokenSecurity: '',
          user: '',
          userLanguage: this.$i18n.t('userLanguage')
        },
        tipo_dato: '',
        valor_dato: '',
        valor_dato_dr: '',
        valor_dato_ds: ''
      }
    }
  },
  created () {
    this.getData()
  },
  watch: {
    selectItem: function () {
      this.itemSelected = this.item
    },
    loadingTranslates: function () {
      // console.log('loadingTranslates: ' + this.loadingTranslates)
    },
    dataLoadedTranslates: function () {
      // console.log(this.formData.nombre_dato)
      // console.log(this.formData.nombre_dato + ' loadingTranslates: ' + this.loadingTranslates)
      // console.log(this.formData.nombre_dato + ' dataLoadedTranslates: ' + this.dataLoadedTranslates)
      // console.log('responseMongoDbTranslates ' + this.formData.nombre_dato)
      // console.log(this.responseMongoDbTranslates)
      if (this.dataLoadedTranslates && this.responseMongoDbTranslates) {
        // console.log(this.formData.nombre_dato + ' seted')
        this.fields = this.responseMongoDbTranslates.body
        // console.log(this.fields)
      }
    },
    responseMongoDbTranslates: function () {
      // console.log('this.item')
      // console.log(this.item)
      this.fields = this.responseMongoDbTranslates.body
      // console.log('this.fields')
      // console.log(this.fields)
    }
  },
  computed: {
    selectItem () {
      return this.itemSelected === '' ? this.item : this.itemSelected
    },
    loadingTranslates () {
      return this.getLoaderTranslatesState()
    },
    dataLoadedTranslates () {
      return this.getDataLoadedTranslatesState()
    },
    responseMongoDbTranslates () {
      // console.log('responseMongoDbTranslates')
      // console.log(this.formData.nombre_dato)
      let responseFun = this.getDataTranslates(this.formData.nombre_dato)
      return responseFun(this.formData.nombre_dato)
    },
    dialogVisible () {
      return this.showDialog
    }
  },
  methods: {
    ...mapGetters([
      'getLoaderTranslatesState',
      'getDataLoadedTranslatesState',
      'getDataTranslates'
    ]),
    selectedItem (value) {
      // console.log(this.selectField + '--selected')
      this.itemSelected = value
      // console.log(value)
      this.$emit('selectedItem', value)
    },
    getData () {
      // console.log('getData')
      // console.log(this.selectField)
      this.formData.nombre_dato = this.selectField
      this.$store.dispatch('getAllTranslatesNoPagination', this.formData)
    }
  }
}
</script>
