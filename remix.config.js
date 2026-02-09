/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
	ignoredRouteFiles: ['.*'],
	server: './server.js',
	serverBuildPath: 'netlify/functions/server.js',
	serverConditions: ['netlify'],
	serverMainFields: ['module', 'main'],
	serverModuleFormat: 'cjs',
	serverPlatform: 'node',
	serverDependenciesToBundle: [
		'@react-dnd/asap',
		'@react-dnd/invariant',
		'@react-dnd/shallowequal',
		'dnd-core',
		'react-dnd',
		'react-dnd-html5-backend'
	]
}
