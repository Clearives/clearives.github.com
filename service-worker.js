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
    "revision": "b7703f5d6debe0e38ffb314f32d69eb3"
  },
  {
    "url": "about/index.html",
    "revision": "505f8d74a36198b6b68c1d6ad93d7010"
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
    "url": "assets/js/14.039ebf4c.js",
    "revision": "8382bdab174c37dce16407b1f85f1b07"
  },
  {
    "url": "assets/js/15.d85de976.js",
    "revision": "dcc0a4c207dc776b93b6d0b158a40e5d"
  },
  {
    "url": "assets/js/16.64aae74f.js",
    "revision": "61bec5d2358abad637fe43fe0b877d64"
  },
  {
    "url": "assets/js/17.d48f7a68.js",
    "revision": "16cf89b7023a5a8e2dba795ff896d03d"
  },
  {
    "url": "assets/js/18.61ceb7fb.js",
    "revision": "094642409974fe2bc7e82366dad046a3"
  },
  {
    "url": "assets/js/19.343eadb1.js",
    "revision": "e2269036d6dfcb9b3f6e32ce48cd2822"
  },
  {
    "url": "assets/js/2.b90ad0ea.js",
    "revision": "04de27efb5bb265b6a021da67b4e9425"
  },
  {
    "url": "assets/js/20.4af8874e.js",
    "revision": "d47552ce143614b9d50bbc765a04ce5c"
  },
  {
    "url": "assets/js/21.40e1dd49.js",
    "revision": "eeb5830130fe8e2ccbfdf9df61dbe9d8"
  },
  {
    "url": "assets/js/22.3ab8f652.js",
    "revision": "293b49c77a90420114695a973001dfcc"
  },
  {
    "url": "assets/js/23.7fb8fad9.js",
    "revision": "8a1c8376f9eabbe45824f85615b8c089"
  },
  {
    "url": "assets/js/24.72fda9c5.js",
    "revision": "3a32e73fd14d15cc8e63d2e40252be53"
  },
  {
    "url": "assets/js/25.f5e31048.js",
    "revision": "3d41ea4b57926154974fc69e1a219585"
  },
  {
    "url": "assets/js/26.e751a2a2.js",
    "revision": "f59c933d123f7f7a3ac105ff3457bc7e"
  },
  {
    "url": "assets/js/3.de08da3f.js",
    "revision": "d313b49a56c9f88fb4b02fd6999b7a7f"
  },
  {
    "url": "assets/js/4.20098fa1.js",
    "revision": "b60bf081bd8fcdb093be39d259ac0cf1"
  },
  {
    "url": "assets/js/5.0b9e59f3.js",
    "revision": "b3da3d50eb708a145bc3eb17fee80279"
  },
  {
    "url": "assets/js/6.6ef83a72.js",
    "revision": "f85baaa1c0d1044036d0f87856122fd5"
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
    "url": "assets/js/app.ef8c0874.js",
    "revision": "aaaa7ed4513d189ed2c55cf53d895b85"
  },
  {
    "url": "daily/record/index.html",
    "revision": "3eb4638ffb10a87e4b5582a1005ce27a"
  },
  {
    "url": "frontend/index.html",
    "revision": "c8908ab38a9919bc70c061baf2da9762"
  },
  {
    "url": "index.html",
    "revision": "d9c19f9eb27a1ae171595f3628228007"
  },
  {
    "url": "logo.jpg",
    "revision": "a15dc59681bd787cd32a2477795e6e9b"
  },
  {
    "url": "node/index.html",
    "revision": "6f4d71e44294a024d7b11d36609bf680"
  },
  {
    "url": "package/index.html",
    "revision": "77de8d266cfc59433cd5c705d16d5ca0"
  },
  {
    "url": "page/2017-06-06-qiniu-upload/index.html",
    "revision": "29d19605125f0cafb4dc4b771d083abb"
  },
  {
    "url": "page/2017-06-23-livereload/index.html",
    "revision": "ba3a968936599def4d745894454db11d"
  },
  {
    "url": "page/array-and-object/index.html",
    "revision": "808fd97a07e1f88b7bd7b9d4e5d90101"
  },
  {
    "url": "page/array-clone/index.html",
    "revision": "391c7ec90306764a92211b748355c4d9"
  },
  {
    "url": "page/Asynchronous-and-event-loops/index.html",
    "revision": "78da732ed3fe8a849040f337ef83fffd"
  },
  {
    "url": "page/autocolor/index.html",
    "revision": "76c765130c0bc1c8b62db0c9e23842f6"
  },
  {
    "url": "page/BASE64-encryption-decryption/index.html",
    "revision": "1c2c1a2dfcd21f4a067e7184aeb9ad31"
  },
  {
    "url": "page/browser-window-open-intercept/index.html",
    "revision": "b39b9f8d82128b17ddf52eae208e10c4"
  },
  {
    "url": "page/github-pages/index.html",
    "revision": "591bdceee022682cb8a647b8416b6f90"
  },
  {
    "url": "page/js-traversing/index.html",
    "revision": "bb65082ad02a0fb3dd1ed0f052091667"
  },
  {
    "url": "page/mobx-use-record/index.html",
    "revision": "c19414f8af98bd86d24313a721923d40"
  },
  {
    "url": "page/module.exports-and-exports/index.html",
    "revision": "bdc9387549128950801fa42379d3a8cd"
  },
  {
    "url": "page/Multiple-asynchronous-collaboration/index.html",
    "revision": "b5d16209b1542ebc1ca80aba93a3fb10"
  },
  {
    "url": "timeline/index.html",
    "revision": "198966ad98fadc20a5d5102bad8c1cb5"
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
