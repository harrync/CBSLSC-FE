import type { Meta, StoryObj } from '@storybook/react';
import { CbAccordion } from '.';

const meta = {
  title: 'Faqs - Accordion',
  component: CbAccordion,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    faqs: [
      {
        question: 'Question',
        answer: [
          {
            type: 'paragraph',
            text: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
            spans: [],
            // @ts-expect-error
            direction: 'ltr',
          },
        ],
      },
      {
        question: 'Question',
        answer: [
          {
            type: 'paragraph',
            text: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
            spans: [],
            // @ts-expect-error
            direction: 'ltr',
          },
        ],
      },
      {
        question: 'Question',
        answer: [
          {
            type: 'paragraph',
            text: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
            spans: [],
            // @ts-expect-error
            direction: 'ltr',
          },
        ],
      },
    ],
  },
} satisfies Meta<typeof CbAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
