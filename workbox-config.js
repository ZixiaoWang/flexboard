module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{css,png,svg,jpeg,jpg,html}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	sourcemap: false,
	cleanupOutdatedCaches: true,
	runtimeCaching: [{
		urlPattern: /\.css$|\.png$|\.jpeg$|\.jpg$/,
		handler: "CacheFirst"
	}, {
		urlPattern: /\.html$|\.js$/,
		handler: "NetworkFirst"
	}]
};