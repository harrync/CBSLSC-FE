import type { Meta, StoryObj } from '@storybook/react';
import { CbBanner } from '.';

const meta = {
  title: 'Banner',
  component: CbBanner,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    title: 'This is a banner',
    image: {
      dimensions: { width: 3000, height: 1500 },
      alt: 'testing',
      copyright: null,
      url: 'https://images.prismic.io/cbslsc/ZfoB2w4qyfNhFy_l_3000x1500.jpg?auto=format,compress',
      id: 'ZfoB2w4qyfNhFy_l',
      edit: { x: 0, y: 0, zoom: 1, background: 'transparent' },
    },
    logo: undefined,
  },
} satisfies Meta<typeof CbBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
