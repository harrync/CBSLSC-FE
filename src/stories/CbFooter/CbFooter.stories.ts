import type { Meta, StoryObj } from '@storybook/react';
import { CbFooter } from '.';

const meta = {
  title: 'Footer',
  component: CbFooter,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    footerText: 'Copyright text',
  },
} satisfies Meta<typeof CbFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
