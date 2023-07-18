const hookIntoRequire = require('require-in-the-middle')
const WebpackModules = require('webpack-modules')

hookIntoRequire(['react-scripts/config/webpack.config'], configFactory => {
	const config = configFactory('production')

	config.resolve.alias['react'] = 'preact/compat'
	config.resolve.alias['react-dom'] = 'preact/compat'
	config.resolve.alias['react-dom/test-utils'] = 'preact/test-utils'

	config.plugins.push(new WebpackModules())

	return () => config
})

require('react-scripts/scripts/build')
