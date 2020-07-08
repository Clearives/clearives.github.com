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
    "revision": "1e15c511f406957bc900d1ab0052e055"
  },
  {
    "url": "about/index.html",
    "revision": "40057753917678649314cfa9c117610a"
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
    "url": "assets/js/18.b33a1632.js",
    "revision": "b2884037f27a020988aff7ea9dee3e79"
  },
  {
    "url": "assets/js/19.27796f86.js",
    "revision": "1c622f86f6f5f195a5dc183f312ff93d"
  },
  {
    "url": "assets/js/2.bcdb1168.js",
    "revision": "8deac7846d33b8aee3af245ed0953c07"
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
    "url": "assets/js/23.d0923cdf.js",
    "revision": "e66649979cbc2fd0ecbed9971e75f0e5"
  },
  {
    "url": "assets/js/24.6544fd39.js",
    "revision": "19b74cb584d3da9d62f66c3481550ef9"
  },
  {
    "url": "assets/js/3.9bfb7560.js",
    "revision": "f8c4033be184e23bfc0ce69d13d36a73"
  },
  {
    "url": "assets/js/4.1052ffc2.js",
    "revision": "7bd098b64a877acbb89d079f37880892"
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
    "url": "assets/js/app.f2b0d18b.js",
    "revision": "c3fae4cbd730da4d04577be40549385e"
  },
  {
    "url": "daily/record/index.html",
    "revision": "252d1457a2035b5dd0684e01fb3d9c9f"
  },
  {
    "url": "frontend/index.html",
    "revision": "ada9cf37c482656c96d25383678c0f74"
  },
  {
    "url": "index.html",
    "revision": "f0131edcc9d5d96a4953eec92085130d"
  },
  {
    "url": "logo.jpg",
    "revision": "a15dc59681bd787cd32a2477795e6e9b"
  },
  {
    "url": "node/index.html",
    "revision": "bda755e9dc51959420be9275ef0886d8"
  },
  {
    "url": "node/notes/a/a.html",
    "revision": "793514cdb8d75be521335cf28d7b32c2"
  },
  {
    "url": "page/2017-06-06-qiniu-upload/index.html",
    "revision": "bf6e538805aaa82ec79d3f9706f28747"
  },
  {
    "url": "page/2017-06-23-livereload/index.html",
    "revision": "f305397e8870ef1cd1c3f93dc1e229a2"
  },
  {
    "url": "page/array-and-object/index.html",
    "revision": "4b0fea11cb4e3b9ea17b0eb62f6cecaf"
  },
  {
    "url": "page/array-clone/index.html",
    "revision": "521b6dd5021ba65b90f422ef6cb1d74e"
  },
  {
    "url": "page/Asynchronous-and-event-loops/index.html",
    "revision": "b679b202d2e0cab9d44a86cea18b8524"
  },
  {
    "url": "page/autocolor/index.html",
    "revision": "ad25eba313c3362d36867d257b0107b4"
  },
  {
    "url": "page/BASE64-encryption-decryption/index.html",
    "revision": "2fb17aac6c2fa3c34e8a389f39724f7e"
  },
  {
    "url": "page/github-pages/index.html",
    "revision": "d31d290a7df6d2280a18baf3647dc0b1"
  },
  {
    "url": "page/js-traversing/index.html",
    "revision": "4199a2ec4c82b82b86a1f97b86475bbc"
  },
  {
    "url": "page/module.exports-and-exports/index.html",
    "revision": "5e3e2c9799f6d09f05d70dc3a96e55e1"
  },
  {
    "url": "page/Multiple-asynchronous-collaboration/index.html",
    "revision": "a7ce33bb410487cf0b2ec4e79d897099"
  },
  {
    "url": "timeline/index.html",
    "revision": "c1bc6fce9b002fd25edfd1fe20f9551b"
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
