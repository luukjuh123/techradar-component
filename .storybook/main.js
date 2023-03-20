module.exports = {
  addons: ['@storybook/addon-essentials'],
  babel: async (options) => ({
    ...options,
  }),
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.@(js|mdx)'],
  webpackFinal: async (config, { configType }) => {
    return config;
  },
};