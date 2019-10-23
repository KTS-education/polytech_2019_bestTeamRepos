const rewireAliases = require("react-app-rewire-aliases");
const { paths } = require("react-app-rewired");
const path = require("path");

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    "@components": path.resolve(__dirname, `${paths.appSrc}/components/`),
    "@img": path.resolve(__dirname, `${paths.appSrc}/img/`),
    "@constantcss": path.resolve(__dirname, `${paths.appSrc}/styles/`),
    "@data": path.resolve(__dirname, `${paths.appSrc}/data/`),
    "@config": path.resolve(__dirname, `${paths.appSrc}/config/`)
  })(config, env);
  return config;
};
