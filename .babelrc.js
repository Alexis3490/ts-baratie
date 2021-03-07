module.exports = api => {
  api.cache(true);

  const presets = ['@babel/env', '@babel/typescript'];
  const plugins = [
    'babel-plugin-transform-typescript-metadata',
    ['@babel/proposal-decorators', { legacy: true }],
    '@babel/proposal-class-properties',
    '@babel/transform-runtime',
  ];
  return {
    presets,
    plugins,
  };
};
