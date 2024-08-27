import type { Meta, StoryObj } from '@storybook/react';
import { CbImageText } from '.';

const meta = {
  title: 'ImageText',
  component: CbImageText,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CbImageText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alignRight: false,
    slice: {
      primary: {
        image: {
          url: 'https://via.placeholder.com/300',
          alt: 'Placeholder',
        },
        text: [
          {
            type: 'paragraph',
            text: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
            spans: [],
          },
        ],
      },
    },
  },
};

export const AlignRight: Story = {
  args: {
    alignRight: true,
    slice: {
      primary: {
        image: {
          url: 'https://via.placeholder.com/300',
          alt: 'Placeholder',
        },
        text: [
          {
            type: 'paragraph',
            text: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
            spans: [],
          },
        ],
      },
    },
  },
};
