<template>
<div>
<ods-form class="ticket-form" label-position="top" :model="itemForm" :rules="itemRules" ref="itemForm" >
  <div class="default-form">
    <div>
      <div>
        <header>
          <h3>{{$t('devicesConfig.form.infoHeader')}}</h3>
        </header>
        <ods-row :gutter="40">
          <ods-col >
            <ods-form-item :label="$t('devicesConfig.form.printercode')" prop="printercode" :required="true">
              <obps-smp-select
              apiEndPoint="/printers/v1/visorall"
              :dataForm="{
                printerDescription: '',
                printercode: '',
                requestBase: {
                  entity: requestForm.requestBase.entity,
                  instalationMain: requestForm.requestBase.instalationMain,
                  office: '',
                  paginationKey: '',
                  tokenSecurity: '',
                  user: '',
                  userLanguage: this.$i18n.t('userLanguage')
                },
              }"
              :needsDescription="true"
              :arrayItems="{value:'printercode',label:'printerDescription'}"
              @dataSelected="setPrinter">
              </obps-smp-select>
              <!-- <ods-input :placeholder="$t('general.placeolder')" v-model="itemForm.eni_cd" auto-complete="eni_cd"></ods-input> -->
            </ods-form-item>
          </ods-col>
        </ods-row>
        <ods-row>
          <ods-col>
            <div>
              <ods-form-item :label="$t('devicesConfig.form.stampcode')" prop="stampcode" :required="true">
                <obps-smp-select
                apiEndPoint="/stamps/v1/visorall"
                :dataForm="{
                  stampDescription: '',
                  stampcode: '',
                  requestBase: {
                    entity: requestForm.requestBase.entity,
                    instalationMain: requestForm.requestBase.instalationMain,
                    office: '',
                    paginationKey: '',
                    tokenSecurity: '',
                    user: '',
                    userLanguage: this.$i18n.t('userLanguage')
                  },
                }"
                :arrayItems="{value:'stampcode',label:'stampDescription'}"
                :needsDescription="true"
                @dataSelected="setStamp">
                </obps-smp-select>
                <!-- <ods-input @focus='appearDialogTable' placeholder="Seleccione elemento" v-model="itemForm.elm_sia_ds" auto-complete="elm_sia_ds"></ods-input> -->
              </ods-form-item>
          </div>
          </ods-col>
        </ods-row>
      </div>
    </div>
  </div>
  <ods-row class="buttons-row" type="flex" justify="end">
    <ods-button v-if="create" type="text" @click="closeDialog">{{$t('general.cancel')}}</ods-button>
    <ods-button type="primary" @click="submitForm('itemForm')">{{$t('general.save')}}</ods-button>
  </ods-row>
</ods-form>
</div>
</template>
<script>
import select from '../../smpUtils/selectors/smpSelector.vue'
import { mapGetters } from 'vuex'
export default{
  components: {
    'obps-smp-select': select
  },
  data () {
    return {
      showDialogTable: false,
      create: true,
      itemForm: {
        printerDescription: '',
        printercode: '',
        stampDescription: '',
        stampcode: '',
        requestBase: {
          entity: this.getEntity(),
          instalationMain: 'sia',
          office: '',
          paginationKey: '',
          tokenSecurity: '',
          user: '',
          userLanguage: this.$i18n.t('userLanguage')
        }
      },
      itemRules: {
        printercode: [
          {required: true, message: this.$t('general.mandatory'), trigger: 'blur'}
        ],
        stampcode: [
          {required: true, message: this.$t('general.mandatory'), trigger: 'blur'}
        ]
      },
      requestForm: {
        printerDescription: '',
        printercode: '',
        stampDescription: '',
        stampcode: '',
        requestBase: {
          entity: this.getEntity(),
          instalationMain: 'sia',
          office: '',
          paginationKey: '',
          tokenSecurity: '',
          user: '',
          userLanguage: this.$i18n.t('userLanguage')
        }
      }
    }
  },
  methods: {
    ...mapGetters([
      'getEntity'
    ]),
    setRequest () {
      for (let key in this.requestForm) {
        this.requestForm[key] = this.itemForm[key]
      }
    },
    submitForm (itemForm) {
      this.$refs[itemForm].validate((valid) => {
        if (valid) {
          this.setRequest()
          this.$emit('guardarItem', this.requestForm)
          this.closeDialog()
          this.resetForm()
        } else {
          console.log('Error submit !')
          return false
        }
      })
    },
    closeDialog () {
      // TODO se tendra que cambiar cuando se controle el dinamismo entre las vistas routing
      this.$emit('closeDialog')
    },
    resetForm () {
      this.itemForm = {
        printerDescription: '',
        printercode: '',
        stampDescription: '',
        stampcode: '',
        requestBase: {
          entity: this.getEntity(),
          instalationMain: 'sia',
          office: '',
          paginationKey: '',
          tokenSecurity: '',
          user: '',
          userLanguage: this.$i18n.t('userLanguage')
        }
      }
    },
    setPrinter (element) {
      this.itemForm.printerDescription = element.label
      this.itemForm.printercode = element.value
    },
    setStamp (element) {
      console.log('setStamp')
      console.log(element)
      this.itemForm.stampDescription = element.label
      this.itemForm.stampcode = element.value
    }
  }
}
</script>
<style type="text/css" scoped="">
  header{
    margin-bottom: 20px;
  }
</style>
