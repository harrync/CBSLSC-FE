import type { StorybookConfig } from '@storybook/nextjs';
import { resolve } from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      builder: {
        useSWC: true, // Enables SWC support
      },
    },
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config, { configType }) => {
    (config.resolve = {
      ...config.resolve,
      alias: {
        '@': [resolve(__dirname, '../src/')],
      },
    }),
      config.module?.rules?.push({
        test: /\.scss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          'sass-loader',
        ],
        include: resolve(__dirname, '/src/styles'),
      });
    // Return the altered config
    return config;
  },
  // staticDirs: ["../public/fonts"],
};
export default config;
