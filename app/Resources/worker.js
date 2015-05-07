// // The SW will be shutdown when not in use to save memory,
// // be aware that any global state is likely to disappear
// console.log("SW startup");

// this.addEventListener('install', function(event) {
//   event.waitUntil(
//     caches.open('v2').then(function(cache) {
//       return cache.addAll(
//         '/sw-test/',
//         '/sw-test/index.html',
//         '/sw-test/style.css',
//         '/sw-test/app.js',
//         '/sw-test/image-list.js',
//         '/sw-test/star-wars-logo.jpg',
//         '/sw-test/gallery/',
//         '/sw-test/gallery/bountyHunters.jpg',
//         '/sw-test/gallery/myLittleVader.jpg',
//         '/sw-test/gallery/snowTroopers.jpg'
//       );
//     })
//   );
// });

// self.addEventListener('activate', function(event) {
//   console.log("SW activated");
// });

// self.addEventListener('fetch', function(event) {
//   console.log("Caught a fetch!");
//   // event.respondWith(new Response("Hello world!"));
// });