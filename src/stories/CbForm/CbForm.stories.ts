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
    title: 'Example form embed',
    form_id: '01HSJWM9KAQ0GPV5M88X7CRPC7',
  },
} satisfies Meta<typeof CbForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
