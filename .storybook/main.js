module.exports = {
  stories: [
    "../app/components/**/*.stories.mdx",
    "../app/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../app/components/atoms/**/*.stories.@(js|jsx|ts|tsx)",
    "../app/components/molecules/**/*.stories.@(js|jsx|ts|tsx)",
    "../app/components/organisms/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
};
