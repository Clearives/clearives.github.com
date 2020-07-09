/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "340a89606238086ac3abe7fc23fc37f7"
  },
  {
    "url": "about/index.html",
    "revision": "59710839f98d67ed206619c21de75b72"
  },
  {
    "url": "assets/css/0.styles.ea47b85f.css",
    "revision": "2536e859a2eeba42b376d4a5b1a63126"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a22d8dee.js",
    "revision": "a06a0eadf28c8aef85944d774b87894d"
  },
  {
    "url": "assets/js/11.63bfcf77.js",
    "revision": "ac3068df111eece0a170b5e220f47288"
  },
  {
    "url": "assets/js/12.0e23309a.js",
    "revision": "8cd66ef216a05ea8ce878f2e4e76f202"
  },
  {
    "url": "assets/js/13.756aa44d.js",
    "revision": "8f011965cd02808e8ec96f508b63b53a"
  },
  {
    "url": "assets/js/14.879f711e.js",
    "revision": "6eb2e03f4d9b57688a673b8461516825"
  },
  {
    "url": "assets/js/15.d940bc34.js",
    "revision": "59facb09390fd7ec452642cc8481ff82"
  },
  {
    "url": "assets/js/16.d88c7811.js",
    "revision": "96bc10f18500b86ffb0d117c51c34501"
  },
  {
    "url": "assets/js/17.446878d8.js",
    "revision": "e898818601c0907bb6d684019aeaff5a"
  },
  {
    "url": "assets/js/18.d04e7307.js",
    "revision": "b2884037f27a020988aff7ea9dee3e79"
  },
  {
    "url": "assets/js/19.20ec84fa.js",
    "revision": "b2f10940cf3fef32eff6602130cbb47b"
  },
  {
    "url": "assets/js/2.b90ad0ea.js",
    "revision": "04de27efb5bb265b6a021da67b4e9425"
  },
  {
    "url": "assets/js/20.5d7c7580.js",
    "revision": "69f412b3bea792e70d86e078950cc319"
  },
  {
    "url": "assets/js/21.02afa212.js",
    "revision": "6a0f44fec54fd57f72fcdbb30396b5f7"
  },
  {
    "url": "assets/js/22.7dd8f6f0.js",
    "revision": "062620f9eba4d3ff68945356273fc7b0"
  },
  {
    "url": "assets/js/23.4b40e7ea.js",
    "revision": "cd45a92ec50c082869fdc73c1aaeab94"
  },
  {
    "url": "assets/js/24.80ca7fc8.js",
    "revision": "94efbc2dc06ecd0173227db73ce8e387"
  },
  {
    "url": "assets/js/25.002b02c0.js",
    "revision": "d94700ce1033a22055c738544a08342d"
  },
  {
    "url": "assets/js/3.de08da3f.js",
    "revision": "d313b49a56c9f88fb4b02fd6999b7a7f"
  },
  {
    "url": "assets/js/4.da48a5fd.js",
    "revision": "0f83df56ffc3e16a1c525273b6d9d8d0"
  },
  {
    "url": "assets/js/5.0b9e59f3.js",
    "revision": "b3da3d50eb708a145bc3eb17fee80279"
  },
  {
    "url": "assets/js/6.bfb6d097.js",
    "revision": "28cd46eb63f82d8015b9a1b8e302b07d"
  },
  {
    "url": "assets/js/7.fd0ae54b.js",
    "revision": "1fa089e31f25c845f24d6878d4865da0"
  },
  {
    "url": "assets/js/8.ee20b3a7.js",
    "revision": "bee5e7ddd2b2246b6131ba5e7fa21090"
  },
  {
    "url": "assets/js/9.b4a289c7.js",
    "revision": "ed07e0e6cd3319c3aa4179867c6a2f0d"
  },
  {
    "url": "assets/js/app.ba88223f.js",
    "revision": "cdbbe918c71bdca42646311245243e16"
  },
  {
    "url": "daily/record/index.html",
    "revision": "62d7d2ba61208fedede9b6d223dc2467"
  },
  {
    "url": "frontend/index.html",
    "revision": "953f7abfdd223e9f6bbfaf6a4d6d6eb9"
  },
  {
    "url": "index.html",
    "revision": "1ebb127b8fbf008cdbf87b354dfb7b6f"
  },
  {
    "url": "logo.jpg",
    "revision": "a15dc59681bd787cd32a2477795e6e9b"
  },
  {
    "url": "node/index.html",
    "revision": "1be5c4c010a09213f135f756786a896b"
  },
  {
    "url": "package/index.html",
    "revision": "0f146f88b75cb89fc532ad424122b63d"
  },
  {
    "url": "page/2017-06-06-qiniu-upload/index.html",
    "revision": "c24563182fc9f88b44f01eb244d98692"
  },
  {
    "url": "page/2017-06-23-livereload/index.html",
    "revision": "210fee2eaaaed4fce6127942df43c02d"
  },
  {
    "url": "page/array-and-object/index.html",
    "revision": "474e1a50a25d6407072eba28a0f73c8c"
  },
  {
    "url": "page/array-clone/index.html",
    "revision": "6e04de79c238f5d30b56bb45db63b660"
  },
  {
    "url": "page/Asynchronous-and-event-loops/index.html",
    "revision": "8151b56252ac82b88e1b6d1d4a2bed45"
  },
  {
    "url": "page/autocolor/index.html",
    "revision": "340d1f69067a6b3fb116fcc7b9b4273c"
  },
  {
    "url": "page/BASE64-encryption-decryption/index.html",
    "revision": "b20bd311b5634088ad4122602ff46515"
  },
  {
    "url": "page/github-pages/index.html",
    "revision": "c46ad0eabdc6aa304d492cdd01c02c1d"
  },
  {
    "url": "page/js-traversing/index.html",
    "revision": "7996841dc95c3b6d39a7f46a33dee03d"
  },
  {
    "url": "page/mobx-use-record/index.html",
    "revision": "37e04a9f1a7864c774e4b9a29fcf38d1"
  },
  {
    "url": "page/module.exports-and-exports/index.html",
    "revision": "d5a9ca4c1b101bd48b7c0ad054660b66"
  },
  {
    "url": "page/Multiple-asynchronous-collaboration/index.html",
    "revision": "b666ade4302e16f81ce652a85e5f8bb2"
  },
  {
    "url": "timeline/index.html",
    "revision": "5e71de4627757ef58cca28e28a9414d8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
