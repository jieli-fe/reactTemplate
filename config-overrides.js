const {injectBabelPlugin} = require('react-app-rewired');
const rewireStyl = require("react-app-rewire-stylus-modules");
const path = require('path');

module.exports = function override(config, env) {
    config = injectBabelPlugin(
        ['import', {libraryName: 'antd', libraryDirectory: 'es', style: 'css'}],
        config,
    );

    config = rewireStyl(config, env);

    config.resolve.extensions = [
        ...config.resolve.extensions, ...['.styl']
    ];

    config.resolve.alias = {
        ...config.resolve.alias,
        '@img': path.resolve('src/images/'),
        '@components': path.resolve('src/components/'),
        '@styl': path.resolve('src/stylus/'),
        '@dt': path.resolve('src/webcontent/'),
        '@config': path.resolve('src/config/')
    };

    return config;
};
