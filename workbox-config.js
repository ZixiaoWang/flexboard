module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{css,png,svg,webp,jpeg,jpg,html}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	sourcemap: false,
	cleanupOutdatedCaches: true,
	runtimeCaching: [{
		urlPattern: /\.png$|\.jpeg$|\.jpg$|\.webp$/,
		handler: "CacheFirst"
	}, {
		urlPattern: /\.html$|\.js$|\.css$/,
		handler: "NetworkFirst"
	}]
};