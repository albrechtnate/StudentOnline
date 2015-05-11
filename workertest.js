console.log("SW on");

// var CACHE_NAME = 'serviceworkertestcache';
// var urlsToCache = [
// 	'/localhost:8080/fallback.html',
// ];

// self.addEventListener('install', function(event) {
// 	console.log("Installing...");

// 	event.waitUntil(
// 		caches.open(CACHE_NAME)
// 			.then(function(cache) {
// 				console.log('Opened cache');
// 				// return cache.addAll(urlsToCache);
// 			})
// 	);
// });

// self.addEventListener('activate', function(event) {
// 	console.log("SW activated");
// });

self.addEventListener('fetch', function(event) {
	console.log("Caught a fetch3!");

	fetch(event.request).then(function(response) {
		if (response.status >= 400) {
			event.respondWith(new Response("Hello from your friendly neighbourhood service worker!"));
		}
	});
});

