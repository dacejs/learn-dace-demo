const { reduxConfig } = require('dace-plugin-redux');

module.exports = {
  modify(config, { target, dev }) {
    const appConfig = config;
    const IS_NODE = target === 'node';
    const IS_DEV = dev;

    reduxConfig.modify(appConfig, { target, dev });
    return appConfig;
  }
};
