import type { Meta, StoryObj } from '@storybook/react';
import { CbForm } from '.';

const meta = {
  title: 'Form',
  component: CbForm,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    title: 'Y2Lw7REAACIAK5Jq',
  },
} satisfies Meta<typeof CbForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
