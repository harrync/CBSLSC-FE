import type { Meta, StoryObj } from '@storybook/react';
import { CbNavigation } from '.';

const meta = {
  title: 'Navigation',
  component: CbNavigation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    links: [
      {
        label: 'Home',
        link: {
          id: 'ZfOGaBIAALsXAXoK',
          type: 'page',
          tags: [],
          lang: 'en-gb',
          slug: '-',
          uid: 'home',
          url: '/',
          link_type: 'Document',
          isBroken: false,
        },
        items: [],
      },
      {
        label: 'About us',
        link: {
          id: 'ZfxSehMAAF4AaqBM',
          type: 'page',
          tags: [],
          lang: 'en-gb',
          slug: '-',
          uid: 'about-us',
          url: '/about-us',
          link_type: 'Document',
          isBroken: false,
        },
        items: [
          {
            label: 'Sub Item',
            link: {
              id: 'ZfxSehMAAF4AaqBM',
              type: 'page',
              tags: [],
              lang: 'en-gb',
              slug: '-',
              uid: 'about-us',
              url: '/about-us',
              link_type: 'Document',
              isBroken: false,
            },
          },
        ],
      },
      {
        label: 'FAQs',
        link: {
          id: 'ZfxD-RUAAPkSIsEX',
          type: 'page',
          tags: [],
          lang: 'en-gb',
          slug: '-',
          uid: 'faqs',
          url: '/faqs',
          link_type: 'Document',
          isBroken: false,
        },
        items: [],
      },
      {
        label: 'Volunteer with us',
        link: {
          id: 'ZgK0rBAAABOXreSA',
          type: 'page',
          tags: [],
          lang: 'en-gb',
          slug: '-',
          uid: 'volunteer-with-us',
          url: '/volunteer-with-us',
          link_type: 'Document',
          isBroken: false,
        },
        items: [],
      },
    ],
  },
} satisfies Meta<typeof CbNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
