import type { Meta, StoryObj } from '@storybook/react';
import { CbLogos } from '.';

const meta = {
  title: 'Logos',
  component: CbLogos,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    title: 'Logos',
    logos: [
      {
        logo: {
          dimensions: { width: 157, height: 100 },
          alt: 'CEG logo',
          copyright: null,
          url: 'https://cbslsc.cdn.prismic.io/cbslsc/ZfxmZs68zyqdRpFK_ceg.svg?auto=compress,format',
          id: 'ZfxmZs68zyqdRpFK',
          edit: { x: 0, y: 0, zoom: 1, background: 'transparent' },
        },
        link: {
          link_type: 'Web',
          url: 'https://www.ceg.co.uk/',
          target: '_blank',
        },
      },
      {
        logo: {
          dimensions: { width: 200, height: 128 },
          alt: 'Imerys logo',
          copyright: null,
          url: 'https://images.prismic.io/cbslsc/ZfxmEM68zyqdRpEi_imerys-min.png?auto=format,compress',
          id: 'ZfxmEM68zyqdRpEi',
          edit: { x: 0, y: 0, zoom: 1, background: 'transparent' },
        },
        link: {
          link_type: 'Web',
          url: 'https://imerys.com/',
          target: '_blank',
        },
      },
      {
        logo: {
          dimensions: { width: 300, height: 300 },
          alt: '542 Digital',
          copyright: null,
          url: 'https://cbslsc.cdn.prismic.io/cbslsc/Zfxr1c68zyqdRpKG_542-square-black.svg?auto=compress,format',
          id: 'Zfxr1c68zyqdRpKG',
          edit: { x: 0, y: 0, zoom: 1, background: 'transparent' },
        },
        link: {
          link_type: 'Web',
          url: 'https://542.digital/',
          target: '_blank',
        },
      },
    ],
  },
} satisfies Meta<typeof CbLogos>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // args: {},
};
