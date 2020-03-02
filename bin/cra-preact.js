#!/usr/bin/env node

const args = process.argv.slice(2)

const exitWith = (...msgs) => {
	console.error('❌', ...msgs)
	process.exit(1)
}

if (args.length === 1 && ['build', 'start', 'test'].includes(args[0])) {
	const action = args[0]

	try {
		require(`cra-preact/src/${action}`)
	} catch (e) {
		exitWith(`Failed to run the '${action}' script. Are you sure you have react-scripts v3+?\n${e}`)
	}
} else if (args.includes('eject')) {
	exitWith(`Don't eject with cra-preact, it does nothing special. Eject with react-scripts.
Be aware, however, that cra-preact does not work in an ejected CRA, then you can just setup preact yourself: https://preactjs.com/guide/v10/getting-started#aliasing-react-to-preact`)
} else {
	exitWith(`Unknown arguments.
Available scripts:
	cra-preact start
	cra-preact build
	cra-preact test`)
}
