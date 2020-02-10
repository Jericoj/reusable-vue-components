import { storiesOf } from '@storybook/vue'
import smpDevicesConfig from './DevicesConfig'

storiesOf('smpDevicesConfig', module)
  .add('data', () => ({
    components: { smpDevicesConfig },
    template:
    `
      <smpDevicesConfig
      />
    `,
    data: () => ({
      values: [
        'Jesús Rivera',
        'jericoj2@gmail.com'
      ]
    })
  }))