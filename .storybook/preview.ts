import type { Preview } from '@storybook/react';

import '@/styles/global.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
      grid: {
        disable: true,
      },
    },
  },
};

export default preview;
