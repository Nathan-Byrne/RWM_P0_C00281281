import type { StorybookConfig } from '@storybook/sveltekit';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|ts|svelte)'],
  addons: ['@storybook/addon-svelte-csf', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/sveltekit',
    options: {}
  },
  viteFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      $lib: path.resolve(__dirname, '../src/lib')
    };
    return config;
  }
};

export default config;
