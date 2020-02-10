<template>
  <div>
    <ods-dialog
      :title="$t('devicesConfig.dialogs.headerForm')"
      :visible='dialogVisible'
      width='30%'
      :show-close='false'
      :append-to-body='true'>
      <obps-smp-devices-config-form
      @closeDialog ="handleClose"
      @guardarItem ="saveDeviceConfig">
      </obps-smp-devices-config-form>
    </ods-dialog>
  </div>
</template>
<script>
import form from './devicesConfigForm.vue'
import { mapGetters } from 'vuex'
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      dataForm: {
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
      'getEntity',
      'getLoaderDevicesConfigState',
      'getDataLoadedDevicesConfigState',
      'getDataAddDevicesConfigState',
      'getDataRemoveDevicesConfigState',
      'getDataModifyDevicesConfigState',
      'getDataDevicesConfig'
    ]),
    handleClose () {
      this.$emit('closeDialog')
    },
    resetFormData () {
      this.dataForm = {
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
    saveDeviceConfig (data) {
      this.dataForm = data
      this.$store.dispatch('modifyDeviceConfig', this.dataForm)
    }
  },
  watch: {
    dataModify: function () {
      if (this.dataModify && this.responseMongoDb) {
        this.resetFormData()
      }
    }
  },
  computed: {
    dataModify () {
      return this.getDataModifyDevicesConfigState()
    }
  },
  components: {
    'obps-smp-devices-config-form': form
  }
}
</script>
