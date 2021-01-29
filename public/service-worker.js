importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "satoshi-technical-task-app"});

workbox.routing.registerRoute(
	({request}) => request.destination === 'image',
	new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
	({request}) => request.destination === 'script',
	new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
	({request}) => request.destination === 'manifest',
	new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
	({request}) => request.destination === 'font',
	new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
	({request}) => request.destination === 'document',
	new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
	({request}) => request.destination === 'style',
	new workbox.strategies.CacheFirst()
);
