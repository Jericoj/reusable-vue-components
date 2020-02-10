import { storiesOf } from '@storybook/vue'
import JTableRow from './JTableRow'

storiesOf('JTableRow', module)
  .add('normal', () => ({
    components: { JTableRow },
    template:
    `
      <JTableRow
        :values="values"
      />
    `,
    data: () => ({
      values: [
        'Josús Rivera',
        'jericoj2@gmail.com'
      ]
    })
  }))