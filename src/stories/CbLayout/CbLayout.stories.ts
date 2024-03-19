import type { Meta, StoryObj } from '@storybook/react';
import { CbLayout } from '.';

const meta = {
  title: 'Layout',
  component: CbLayout,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    children: 'Hello, World!',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CbLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    classes: 'col-7',
  },
};
