const hookIntoRequire = require('require-in-the-middle')

hookIntoRequire(['react-scripts/config/webpack.config'], configFactory => {
	const config = configFactory('development')

	config.resolve.alias['react'] = 'preact/compat'
	config.resolve.alias['react-dom'] = 'preact/compat'
	config.resolve.alias['react-dom/test-utils'] = 'preact/test-utils'

	return () => config
})

require('react-scripts/scripts/start')
