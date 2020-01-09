module.exports = function({ config }) {
  config.module.rules.push({
    test: /story\.tsx?$/,
    loaders: [
      {
        loader: require.resolve("@storybook/source-loader"),
        options: { parser: "typescript" }
      }
    ],
    enforce: "pre"
  });

  return config;
};
