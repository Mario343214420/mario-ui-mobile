module.exports = {
	pages: {
		index: {
			entry: 'examples/main.js',
			template: 'public/index.html',
			filename: 'index.html'
		}
	},
	publicPath: './',
	// 扩展 webpack 配置，使 packages 加入编译
	chainWebpack: config => {
		config.plugin("html-index").tap(args => {
			args[0].minify = {
				removeAttributeQuotes: false
			}
			return args
		});
		config.module
			.rule('js')
			.include
			.add('/packages')
			.end()
			.use('babel')
				.loader('babel-loader')
				.end()
			.use('vue-loader')
				.loader('vue-loader')
				// .tap(options => options)
				.end()
			.use('html-loader')
				.loader('html-loader')
				.end()
	}
};
