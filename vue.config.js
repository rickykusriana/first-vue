module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },
    runtimeCompiler: true,
    // devServer: {
    //     host: 'localhost'
    // }
}