import { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|ts)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: '@storybook/web-components-vite',
};
export default config;
