const {injectBabelPlugin} = require('react-app-rewired');
const rewireStyl = require("react-app-rewire-stylus-modules");
const path = require('path');
const rewireProvidePlugin = require('react-app-rewire-provide-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


function rewireAddLoader(config, env) {
    let rules = config.module.rules;
    let loader = {
        test: require.resolve('jquery'),
        use: [{
            loader: 'expose-loader',
            options: 'jQuery'
        }, {
            loader: 'expose-loader',
            options: '$'
        }]
    }

    rules = (rules || []).concat(loader)

    console.log(config.module.rules)
    return config
}


module.exports = function override(config, env) {
    config = injectBabelPlugin(
        ['import', {libraryName: 'antd', libraryDirectory: 'es', style: 'css'}],
        config,
    );

    config = rewireStyl(config, env);

    console.log(config.mode);

    config.resolve.extensions = [
        ...config.resolve.extensions, ...['.styl']
    ];

    config.resolve.alias = {
        ...config.resolve.alias,
        '@img': path.resolve('src/images/'),
        '@components': path.resolve('src/components/'),
        '@styl': path.resolve('src/stylus/'),
        '@dt': path.resolve('src/webcontent/'),
        '@config': path.resolve('src/config/'),
        // 'jquery': 'jquery'
    };

   /* config.plugins = (config.plugins || []).concat([
        new HtmlWebpackPlugin({
            title: 'Custom template',
            filename: 'custom.html',
            template: './public/index2.html',
            favicon:'./public/favicon.ico'
        })
    ])*/

    // rewireAddLoader(config, env)

   /* config = rewireProvidePlugin(config, env, {
        $: 'jquery',
        jQuery: 'jquery',
        'window.$': 'jquery',
        'window.jQuery': 'jquery'
    })*/

    return config;
};
