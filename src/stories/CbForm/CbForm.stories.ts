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
    form_id: 'Tckupi8l',
  },
} satisfies Meta<typeof CbForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
