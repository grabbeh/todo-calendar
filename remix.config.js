/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
	ignoredRouteFiles: ['**/.*'],
	server: './server.js',
	serverBuildPath: 'netlify/functions/server.js',
	serverModuleFormat: 'cjs',
	serverDependenciesToBundle: [
		'@react-dnd/asap',
		'@react-dnd/invariant',
		'@react-dnd/shallowequal',
		'dnd-core',
		'react-dnd',
		'react-dnd-html5-backend'
	]
}
