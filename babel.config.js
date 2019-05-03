module.exports = function(api) {
    api.cache(true);

    const presets = ['@babel/preset-env', '@babel/preset-react'];

    const plugins = [
        '@babel/plugin-syntax-dynamic-import',
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        '@babel/plugin-proposal-class-properties',
        [
            'module-resolver',
            {
                alias: {
                    actions: './src/actions',
                    assets: './src/assets',
                    common: './src/common',
                    components: './src/components',
                    constants: './src/constants',
                    containers: './src/containers',
                    reducers: './src/reducers',
                    store: './src/store',
                    templates: './src/templates',
                    ui: './src/common/ui',
                },
            },
        ],
    ];
    return {
        presets,
        plugins,
        env: {
            test: {
                plugins: ['require-context-hook'],
            },
        },
    };
};
