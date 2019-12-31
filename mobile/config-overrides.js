const { addBabelPlugin, override } = require('customize-cra');

module.export = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ])
);
