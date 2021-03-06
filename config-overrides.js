/*
Gives react-app-rewired the ability to add custom webpack configurations
Learn more --> https://github.com/timarney/react-app-rewired#how-to-rewire-your-create-react-app-project
 */
const { override, fixBabelImports, addLessLoader, useBabelRc, useEslintRc } = require('customize-cra');
const ENV = require('./.env-cmdrc.js');
const darkTheme = require('./src/Styles/darkTheme');

module.exports = override(
   useBabelRc(),
   fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true
   }),
   addLessLoader({
      javascriptEnabled: true,
      // Override antd less variables here
      // https://ant.design/docs/react/customize-theme
      modifyVars: darkTheme
   })
);
