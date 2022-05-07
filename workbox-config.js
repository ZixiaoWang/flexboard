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
	sourcemap: false
};