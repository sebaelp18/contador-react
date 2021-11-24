const CACHE_ELEMENTS = [
    "./",
    "https://unpkg.com/react@17/umd/react.production.min.js",
    "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js",
    "https://unpkg.com/@babel/standalone/babel.min.js",
    "./components/Contador.js",
    "./style.css" 
];

const CACHE_NAME = "3cachete_pechito_ombligo";

self.addEventListener("install", (e) => {
    e.waitUntil(caches.open(CACHE_NAME).then((cache) => {
        cache.addAll(CACHE_ELEMENTS).then(() => {
            self.skipWaiting();
        }).catch(console.log);
    })
    );
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((res)=> {
            if (res) {
                return res;
            }
            return fetch(e.request);
        }

        )
    )
   
});