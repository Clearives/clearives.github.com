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
    "revision": "559e0218c06b588fcd501ada36c20201"
  },
  {
    "url": "about/index.html",
    "revision": "f71412abc2b31b4386881a9b6702fb81"
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
    "url": "assets/js/14.62f7caac.js",
    "revision": "5f5b29670e100451e7502c01779cfb42"
  },
  {
    "url": "assets/js/15.d862887f.js",
    "revision": "c1e4f1869f5bed9f42573d212334f480"
  },
  {
    "url": "assets/js/16.3e4680c2.js",
    "revision": "9b2d9524bc35b189cf443fc2ad26df61"
  },
  {
    "url": "assets/js/17.5fb301ba.js",
    "revision": "c7eec7d0fba0592746ba6c4bfdd1be9a"
  },
  {
    "url": "assets/js/18.916a88b7.js",
    "revision": "c396d72f74ea61127b308e9c597129cb"
  },
  {
    "url": "assets/js/19.25be6734.js",
    "revision": "28ef3b7d13c5cc0d138f23706505519e"
  },
  {
    "url": "assets/js/2.b90ad0ea.js",
    "revision": "04de27efb5bb265b6a021da67b4e9425"
  },
  {
    "url": "assets/js/20.52298525.js",
    "revision": "eaab979dd2fe50513861a59d8f386562"
  },
  {
    "url": "assets/js/21.4d2eba85.js",
    "revision": "177b0f948c73635867e1a2545c04b4dc"
  },
  {
    "url": "assets/js/22.634cb17e.js",
    "revision": "694664b795fbbb7f97ccd9d026faa9c1"
  },
  {
    "url": "assets/js/23.837e46ba.js",
    "revision": "025ee551e0ecdfdfcaec9f68956a59e2"
  },
  {
    "url": "assets/js/24.dd6aac08.js",
    "revision": "37e4f843ca374e3fb20154929cbe086a"
  },
  {
    "url": "assets/js/25.b08c0c36.js",
    "revision": "34b4bcc3419ae16f3143551cb5c31492"
  },
  {
    "url": "assets/js/26.93b109dc.js",
    "revision": "ca05e3e0c6414a57b4c3e8fba020b832"
  },
  {
    "url": "assets/js/27.0b1aa968.js",
    "revision": "e290ca601218d54c3686aea5960f53b2"
  },
  {
    "url": "assets/js/28.0197f818.js",
    "revision": "c0a5d9f8a7cc9186ef5071a85b50feaa"
  },
  {
    "url": "assets/js/29.79a78bf3.js",
    "revision": "9b1e674796f0c401932ede495639723f"
  },
  {
    "url": "assets/js/3.08c50603.js",
    "revision": "d0613daf6df304db2631d55d85e76fee"
  },
  {
    "url": "assets/js/30.1b9ca2e7.js",
    "revision": "ec601dfbd3652c27d6cccb087cf0addb"
  },
  {
    "url": "assets/js/31.b684d314.js",
    "revision": "4aabf19f4048dcf1ddb3be9db3ef7a11"
  },
  {
    "url": "assets/js/32.6ab1ffb2.js",
    "revision": "a4a827f757edb86edcf26437d4ba1fdb"
  },
  {
    "url": "assets/js/4.2d03c6f2.js",
    "revision": "827b5d69484fb2f88f30c804bfca377e"
  },
  {
    "url": "assets/js/5.0b9e59f3.js",
    "revision": "b3da3d50eb708a145bc3eb17fee80279"
  },
  {
    "url": "assets/js/6.da510395.js",
    "revision": "dfa0e09dbe61bedc6365272051ed94ee"
  },
  {
    "url": "assets/js/7.fd0ae54b.js",
    "revision": "1fa089e31f25c845f24d6878d4865da0"
  },
  {
    "url": "assets/js/8.3a34e5f9.js",
    "revision": "b75cf8fd74ba9318428aff8050be6847"
  },
  {
    "url": "assets/js/9.b4a289c7.js",
    "revision": "ed07e0e6cd3319c3aa4179867c6a2f0d"
  },
  {
    "url": "assets/js/app.8f6fd0c9.js",
    "revision": "bb21eb774c35ec4b9a56ececdd456dde"
  },
  {
    "url": "daily/record/index.html",
    "revision": "c13afe42e8c34cf273a2190660f4791d"
  },
  {
    "url": "frontend/index.html",
    "revision": "403344a679269d4df9ce37cd08cf2a72"
  },
  {
    "url": "index.html",
    "revision": "139b32d655de5a0b03493aa2dc77b0aa"
  },
  {
    "url": "logo.jpg",
    "revision": "a15dc59681bd787cd32a2477795e6e9b"
  },
  {
    "url": "node/index.html",
    "revision": "6f2be05cdb5e6917da00af2a77325fdd"
  },
  {
    "url": "package/index.html",
    "revision": "02aed9f4d151f94e21b2d375468d0c10"
  },
  {
    "url": "page/2017-06-06-qiniu-upload/index.html",
    "revision": "bdb42dadda9c8e7407b683763c27b6af"
  },
  {
    "url": "page/2017-06-23-livereload/index.html",
    "revision": "f7373ea63c92b4f5d99a595a66d0f0f9"
  },
  {
    "url": "page/array-and-object/index.html",
    "revision": "a108c5643f4102b795e1a1e4fa130194"
  },
  {
    "url": "page/array-clone/index.html",
    "revision": "52d8fc5a7d71e1243ea11d3956eab815"
  },
  {
    "url": "page/Asynchronous-and-event-loops/index.html",
    "revision": "802beefc5257d6058f1c0bec48dc9d7c"
  },
  {
    "url": "page/autocolor/index.html",
    "revision": "c5413b96b57cfb59d0151f37caa95769"
  },
  {
    "url": "page/BASE64-encryption-decryption/index.html",
    "revision": "785359857666b076ec1f2e9caee669c5"
  },
  {
    "url": "page/browser-window-open-intercept/index.html",
    "revision": "65998b2294eada2f0d57ce0f870175e9"
  },
  {
    "url": "page/docker-note/index.html",
    "revision": "8dcc50f2bb0b079b5858e947052b99cc"
  },
  {
    "url": "page/es6-learn-summary/index.html",
    "revision": "f9bce65f62e7adff431c53067cb4ddbb"
  },
  {
    "url": "page/github-pages/index.html",
    "revision": "c55df38941664ab407a1681b5506543c"
  },
  {
    "url": "page/js-traversing/index.html",
    "revision": "fe2e5ddf0dcb897846b94b4710587f44"
  },
  {
    "url": "page/loops_and_iteration/index.html",
    "revision": "277e6d880495e6dd971b53cc60dcd4b5"
  },
  {
    "url": "page/mobx-use-record/index.html",
    "revision": "05ad1f78a384c1e03ea18a09d3e7ecb6"
  },
  {
    "url": "page/module.exports-and-exports/index.html",
    "revision": "0e4486b37000732ea63f6336f282c782"
  },
  {
    "url": "page/Multiple-asynchronous-collaboration/index.html",
    "revision": "248d85d9d1e71e337c14521421f45839"
  },
  {
    "url": "page/react-func-pass/index.html",
    "revision": "0955e28ad3c354cf4874a573bd08fbdf"
  },
  {
    "url": "page/taro-practice-summary/index.html",
    "revision": "0ee867e5d7d495bf3dedcc885be7f50f"
  },
  {
    "url": "page/weapp-save-base64/index.html",
    "revision": "4db70b5259f5b7d5e0d0efcada701a99"
  },
  {
    "url": "timeline/index.html",
    "revision": "06175b79ca17022f3115087243a2c5ed"
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
