#!/usr/bin/env node

const args = process.argv.slice(2)

const exitWith = (...msgs) => {
	console.error('❌', ...msgs)
	process.exit(1)
}

if (args.length === 1 && ['build', 'start'].includes(args[0])) {
	const action = args[0]

	try {
		require(`cra-preact/src/${action}`)
	} catch {
		exitWith('Failed to run the script. Are you sure you have react-scripts v3+?')
	}
} else if (args.includes('eject')) {
	exitWith(`Don't eject with cra-preact, it does nothing special. Eject with react-scripts.`)
} else if (args.includes('test')) {
	exitWith('Testing with cra-preact is not yet supported. Perhaps a new update has it?')
} else {
	exitWith(`Unknown arguments.
Available scripts:
	cra-preact build
	cra-preact start`)
}
