
let cacheVersion = "v2";
let cachedFiles = [
    "./",
    "./index.html",
    "./restaurant.html",
    "./css/styles.css",
    "./data/restaurants.json",
    "./js/dbhelper.js",
    "./js/main.js",
    "./js/restaurant_info.js",
    "./img/1.jpg",
    "./img/2.jpg",
    "./img/3.jpg",
    "./img/4.jpg",
    "./img/5.jpg",
    "./img/6.jpg",
    "./img/7.jpg",
    "./img/8.jpg",
    "./img/9.jpg",
    "./img/10.jpg"
    
];


/*
* Setting up Install, Activate and Fetch
*/
self.addEventListener("install", function(e){
    console.log("installed")
  
    e.waitUntil(
            caches.open(cacheVersion).then(function(cache){
            console.log("caching");
            return cache.addAll(cachedFiles);
        })
    )
})

self.addEventListener("activate", function(e){
    console.log("Service Worker Activated")
    e.waitUntil(
        caches.keys().then(function(cacheNames){
            return Promise.all(cacheNames.map(function(oldCacheVersion){
                    if(oldCacheVersion !== cacheVersion){
                    console.log("Removing cached files from new cache", oldCacheVersion);
                    return caches.delete(oldCacheVersion);
                }
            }))
        })
    )
})

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
            if (response) {
            return response;
          }
  
        
          var fetchRequest = event.request.clone();
  
          return fetch(fetchRequest).then(
            function(response) {
              if(!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
  
              var responseToCache = response.clone();
  
              caches.open(cachedFiles)
                .then(function(cache) {
                  cache.put(event.request, responseToCache);
                });
  
              return response;
            }
          );
        })
      );
  });
  