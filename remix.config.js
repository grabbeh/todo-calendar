/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
	serverBuildTarget: 'netlify',
	server: './server.js',
	ignoredRouteFiles: ['.*'],
	serverDependenciesToBundle: [
		'@react-dnd/asap',
		'@react-dnd/invariant',
		'@react-dnd/shallowequal',
		'dnd-core',
		'react-dnd',
		'react-dnd-html5-backend'
	]
	// appDirectory: "app",
	// assetsBuildDirectory: "public/build",
	// serverBuildPath: "netlify/functions/server/index.js",
	// publicPath: "/build/",
	// devServerPort: 8002
}
