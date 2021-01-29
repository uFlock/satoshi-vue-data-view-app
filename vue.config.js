module.exports = {
	// productionSourceMap: false, //uncomment if you want to hide sourcemaps
	pwa: {
		// runtimeCompiler: true,
		workboxPluginMode: 'InjectManifest',
		workboxOptions: {
			swSrc: 'src/registerServiceWorker.js',
			swDest: 'service-worker.js',
		},
		name: "Satoshi Login App",
		short_name: "Satoshi Login App",
		themeColor: "#1890A9",
		iconPaths: {
			favicon32: 'img/icons/favicon-32x32.png',
			favicon16: 'img/icons/favicon-16x16.png',
			appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
			maskIcon: 'img/icons/safari-pinned-tab.svg',
			msTileImage: 'img/icons/msapplication-icon-144x144.png'
		},
		icons: [
			{
				src: "./img/icons/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png"
			},
			{
				src: "./img/icons/android-chrome-512x512.png",
				size: "512x512",
				type: "image/png"
			},
			{
				src: "./img/icons/android-chrome-maskable-192x192.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "maskable"
			},
			{
				src: "./img/icons/android-chrome-maskable-512x512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "maskable"
			},
			{
				src: "./img/icons/android-chrome-maskable-512x512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "maskable"
			},
			{
				src: "./img/icons/manifest-icon-192.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "maskable any"
			},
			{
				src: "./img/icons/manifest-icon-512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "maskable any"
			}	,
			{
				src: "./img/icons/manifest-icon-512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "maskable any"
			},
			{
				src: "./img/icons/favicon-16x16.png",
				sizes: "16x16",
				type: "image/png",
				purpose: "maskable any"
			},
			{
				src: "./img/icons/favicon-32x32.png",
				sizes: "32x32",
				type: "image/png",
				purpose: "maskable any"
			}
		],
		start_url: ".",
		display: "standalone",
		background_color: "#000000"
	}
};
