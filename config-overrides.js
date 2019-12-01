const rewireAliases = require("react-app-rewire-aliases");
const { paths } = require("react-app-rewired");
const path = require("path");
const { useBabelRc, override, useEslintRc } = require("customize-cra");
/* config-overrides.js */

module.exports = function overrider(config, env) {
  override(useBabelRc(), useEslintRc());
  config = rewireAliases.aliasesOptions({
    "@src": path.resolve(__dirname, `${paths.appSrc}/`),
    "@components": path.resolve(__dirname, `${paths.appSrc}/components/`),
    "@img": path.resolve(__dirname, `${paths.appSrc}/img/`),
    "@constantcss": path.resolve(__dirname, `${paths.appSrc}/styles/`),
    "@data": path.resolve(__dirname, `${paths.appSrc}/data/`),
    "@config": path.resolve(__dirname, `${paths.appSrc}/config/`),
    "@store": path.resolve(__dirname, `${paths.appSrc}/store/`),
    "@reducers": path.resolve(__dirname, `${paths.appSrc}/reducers/`),
    "@actions": path.resolve(__dirname, `${paths.appSrc}/actions/`)
  })(config, env);
  return config;
};
