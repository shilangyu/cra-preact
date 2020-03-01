#!/usr/bin/env node

const args = process.argv.slice(2)

if (args.length === 1 && ['build', 'start'].includes(args[0])) {
	const action = args[0]
	console.log('running', action)
} else if (args.includes('eject')) {
	console.log(`Don't eject with cra-preact, it does nothing special. Eject with react-scripts.`)
	process.exit(1)
} else if (args.includes('test')) {
	console.log('Testing with cra-preact is not yet supported. Perhaps a new update has it?')
	process.exit(1)
} else {
	console.log(`Unknown arguments.
Available scripts:
	cra-preact build
	cra-preact start`)
	process.exit(1)
}
