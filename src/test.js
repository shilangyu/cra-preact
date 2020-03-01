const hookIntoRequire = require('require-in-the-middle')

hookIntoRequire(['react-scripts/scripts/utils/createJestConfig'], configFactory => {
	const path = require('path')
	const paths = require('react-scripts/config/paths')

	const config = configFactory(
		relativePath => path.resolve(__dirname, '..', '..', 'react-scripts', relativePath),
		path.resolve(paths.appSrc, '..'),
		false
	)
	config.moduleNameMapper['^react$'] = 'preact/compat'
	config.moduleNameMapper['^react-dom/test-utils$'] = 'preact/test-utils'
	config.moduleNameMapper['^react-dom$'] = 'preact/compat'

	return () => config
})

require('react-scripts/scripts/test')
