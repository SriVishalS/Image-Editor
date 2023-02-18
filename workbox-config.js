module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{webp,svg,html,md,js,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};