import { storiesOf } from '@storybook/vue'
import JTableRow from './MPSJTableRow'

storiesOf('MPSJTableRow', module)
  .add('with 2 values', () => ({
    components: { JTableRow },
    template:
    `
      <JTableRow
        :values="values"
      />
    `,
    data: () => ({
      values: [
        'Jesús Rivera',
        'jericoj2@gmail.com'
      ]
    })
  }))