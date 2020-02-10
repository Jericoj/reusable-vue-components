<template>
  <obps-smp-users-maintenance-view></obps-smp-users-maintenance-view>
</template>
<script>
import view from './modules/devicesConfigView.vue'
export default {
  name: 'smpDevicesConfig',
  components: {
    'obps-smp-devices-config-view': view
  }
}
</script>
