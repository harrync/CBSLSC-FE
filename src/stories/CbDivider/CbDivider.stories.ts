import type { Meta, StoryObj } from '@storybook/react';
import { CbDivider } from '.';

const meta = {
  title: 'Divider',
  component: CbDivider,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CbDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: 'down',
  },
};
export const Up: Story = {
  args: {
    direction: 'up',
  },
};
