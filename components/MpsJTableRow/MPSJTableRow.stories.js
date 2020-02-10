import { storiesOf } from '@storybook/vue'
import JTableRow from './MPSJTableRow'

storiesOf('MPSJTableRow', module)
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
        'Jesús Rivera',
        'jericoj2@gmail.com'
      ]
    })
  }))