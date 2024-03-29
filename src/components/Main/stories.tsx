import { Meta, Story } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Basic: Story = (args) => <Main {...args} />

export const ComponentWithChangedValues: Story = (args) => <Main {...args} />

ComponentWithChangedValues.args = {
  title: 'Boilerplate',
  description: 'Description'
}
