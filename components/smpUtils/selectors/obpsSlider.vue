<template>
  <div>
    <template>
      <ods-row class="flex-container align-center">
        <ods-col :span='23'>
          <ods-slider v-model="sliderValue" :step="10" :show-tooltip="false" :disabled="sliderDisabled" :max="maxValue" @change="sliderChange" >
          </ods-slider>
        </ods-col>
        <ods-col :span='1' style="float: right; margin-left: 10px">
          <template v-if="!sliderComplete">
            <ods-icon name="lock" style="color:red;" size="22"></ods-icon>
          </template>
          <template v-else>
            <ods-icon name="unlock" style="color:green;" size="22"></ods-icon>
          </template>
        </ods-col>
      </ods-row>
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

export default {
  name: 'obps-slider',
  props: {
  },
  data () {
    return {
      maxValue: 100,
      sliderValue: 0,
      sliderDisabled: false,
      sliderComplete: false
    }
  },
  created () {
  },
  mounted () {
  },
  watch: {
  },
  computed: {
  },
  methods: {
    sliderChange () {
      console.log('sliderChange: sliderValue=' + this.sliderValue)
      if (this.sliderValue === this.maxValue) {
        this.sliderDisabled = true
        this.sliderComplete = true
        this.emitSliderComplete()
      }
      this.sliderValue = 0
    },
    emitSliderComplete () {
      // console.log('obps-selector: emitBlur')
      this.$emit('sliderComplete')
    },
    emitFocus () {
      // console.log('obps-selector: emitFocus')
      this.$emit('focus')
    }
  }
}
</script>
