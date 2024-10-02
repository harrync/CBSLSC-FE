import type { Meta, StoryObj } from '@storybook/react';
import { CbButton } from '.';

const meta = {
  title: 'Button',
  component: CbButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { label: 'Button', link: undefined, type: 'primary' },
} satisfies Meta<typeof CbButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    label: 'Button',
  },
};
