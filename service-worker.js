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
    "revision": "35f73bda53bd97caadc2c2071973884d"
  },
  {
    "url": "about/index.html",
    "revision": "628a8f23df10db2235691c24713dda75"
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
    "url": "assets/js/6.6755a6ce.js",
    "revision": "d6bfdf353095bd61de3c7628c47dcb06"
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
    "url": "assets/js/app.7fd88ab6.js",
    "revision": "bf60942e1656e699d30a888f8d7e1f73"
  },
  {
    "url": "daily/record/index.html",
    "revision": "87ff9848a1666593490912051cc200e6"
  },
  {
    "url": "frontend/index.html",
    "revision": "5ee990f0854178bcea30bec39edf9732"
  },
  {
    "url": "index.html",
    "revision": "6733d6182a70cc04b1729d518f0bed87"
  },
  {
    "url": "logo.jpg",
    "revision": "a15dc59681bd787cd32a2477795e6e9b"
  },
  {
    "url": "node/index.html",
    "revision": "7ff664aa9ef2b960664a5c6cafb3570d"
  },
  {
    "url": "package/index.html",
    "revision": "ca9947c6d968f4068b6dfe5392e78f3e"
  },
  {
    "url": "page/2017-06-06-qiniu-upload/index.html",
    "revision": "f87e07e0ecce4cf624c8e90265b11674"
  },
  {
    "url": "page/2017-06-23-livereload/index.html",
    "revision": "67de93503e824de47a3d6561b30d18d5"
  },
  {
    "url": "page/array-and-object/index.html",
    "revision": "4e21f5a8988115db34996f009868a447"
  },
  {
    "url": "page/array-clone/index.html",
    "revision": "b007f0d80b16e05f48ae9df2693f3b70"
  },
  {
    "url": "page/Asynchronous-and-event-loops/index.html",
    "revision": "806567381da8e215205b2ee028e8dfc9"
  },
  {
    "url": "page/autocolor/index.html",
    "revision": "78c700a228f60e155c50623599728cf1"
  },
  {
    "url": "page/BASE64-encryption-decryption/index.html",
    "revision": "ff7a0e831237ea89d481680eb8487bc2"
  },
  {
    "url": "page/browser-window-open-intercept/index.html",
    "revision": "7fdcf9b21d419fdddb0b5ec2c2330544"
  },
  {
    "url": "page/github-pages/index.html",
    "revision": "c358214a0d4184c0a7d63cbd582d7bc3"
  },
  {
    "url": "page/js-traversing/index.html",
    "revision": "430b3922f2f2b685825919898da3366a"
  },
  {
    "url": "page/mobx-use-record/index.html",
    "revision": "ce5888bd4fef87ab10d3acd68b43d412"
  },
  {
    "url": "page/module.exports-and-exports/index.html",
    "revision": "bfc8ad0f215bd1bd0e47effd8ec46809"
  },
  {
    "url": "page/Multiple-asynchronous-collaboration/index.html",
    "revision": "023b9718a91227a72c95520fc3df7de4"
  },
  {
    "url": "timeline/index.html",
    "revision": "dbab147b26807873a3de53783c6b6471"
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
