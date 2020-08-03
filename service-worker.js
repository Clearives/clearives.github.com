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
    "revision": "4e09d554353032734a8c74f89944fa8f"
  },
  {
    "url": "about/index.html",
    "revision": "2e568eedde842b97bfae8e84f014e590"
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
    "url": "assets/js/15.d85de976.js",
    "revision": "dcc0a4c207dc776b93b6d0b158a40e5d"
  },
  {
    "url": "assets/js/16.9902d2d9.js",
    "revision": "8d033020a560c730bed2b8192b09d3f8"
  },
  {
    "url": "assets/js/17.7a028f61.js",
    "revision": "8ec8d582b2b99028636251528dab8545"
  },
  {
    "url": "assets/js/18.89dfe649.js",
    "revision": "b2d0f31b7e7784eca05f5a95443ab69d"
  },
  {
    "url": "assets/js/19.ee10f52c.js",
    "revision": "364f26b5315afb3328ab4ff465525038"
  },
  {
    "url": "assets/js/2.b90ad0ea.js",
    "revision": "04de27efb5bb265b6a021da67b4e9425"
  },
  {
    "url": "assets/js/20.9247c7a8.js",
    "revision": "dabbf63f4f0b31147d52675a763423c9"
  },
  {
    "url": "assets/js/21.852553eb.js",
    "revision": "abfb158780235aaa354f837f418e4458"
  },
  {
    "url": "assets/js/22.1debe013.js",
    "revision": "2f061ae4078eef8ffb571d763637d11b"
  },
  {
    "url": "assets/js/23.8090c8f0.js",
    "revision": "9fdece82d0d5660963e8455f2cbf550f"
  },
  {
    "url": "assets/js/24.e23b7a2e.js",
    "revision": "18002b1ccfa9b7d98e1b02ffdd24ddd6"
  },
  {
    "url": "assets/js/25.125f781b.js",
    "revision": "9da282629bc4e4ed4378f6d054ba43ff"
  },
  {
    "url": "assets/js/26.f81d2707.js",
    "revision": "9628aa6df8a8994492f65c99f2ef4aa7"
  },
  {
    "url": "assets/js/27.83704bff.js",
    "revision": "abfb4c5bb3a9a3deb3e300ee5ab32d8e"
  },
  {
    "url": "assets/js/3.de08da3f.js",
    "revision": "d313b49a56c9f88fb4b02fd6999b7a7f"
  },
  {
    "url": "assets/js/4.faf69ca0.js",
    "revision": "06b10de676de98e4403f0d5064a1b60c"
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
    "url": "assets/js/8.953c36c9.js",
    "revision": "ae1118e2bc35bc84a4e781e30dcc07c5"
  },
  {
    "url": "assets/js/9.b4a289c7.js",
    "revision": "ed07e0e6cd3319c3aa4179867c6a2f0d"
  },
  {
    "url": "assets/js/app.b03376a7.js",
    "revision": "b410bdbc9106b854fe586dce1773e284"
  },
  {
    "url": "daily/record/index.html",
    "revision": "b971a1440ed30ecb74f6b2f4e6887c3d"
  },
  {
    "url": "frontend/index.html",
    "revision": "573fcc434592e07206cb08f8abe5fd16"
  },
  {
    "url": "index.html",
    "revision": "366fe541e5e88b29b767a0dbaf9700ff"
  },
  {
    "url": "logo.jpg",
    "revision": "a15dc59681bd787cd32a2477795e6e9b"
  },
  {
    "url": "node/index.html",
    "revision": "7a5431b63ea290bbb4be602036ffa4e3"
  },
  {
    "url": "package/index.html",
    "revision": "651a7c11a238fc12cce252e0b9d83ed0"
  },
  {
    "url": "page/2017-06-06-qiniu-upload/index.html",
    "revision": "4fde1d5ff97eb9f8d221f560bcf42c5c"
  },
  {
    "url": "page/2017-06-23-livereload/index.html",
    "revision": "c2c53492a62b63d44977efd408d7c093"
  },
  {
    "url": "page/array-and-object/index.html",
    "revision": "a5e35ace75403061f3304b6c96790f91"
  },
  {
    "url": "page/array-clone/index.html",
    "revision": "6bc6c1fb9ab1a12db8bbbeedf4660d2f"
  },
  {
    "url": "page/Asynchronous-and-event-loops/index.html",
    "revision": "46a483f14e06ad796b37160ec3586ca7"
  },
  {
    "url": "page/autocolor/index.html",
    "revision": "756fc40011971259ef85012525fe3b25"
  },
  {
    "url": "page/BASE64-encryption-decryption/index.html",
    "revision": "b0f631f5ed23f4cc610edf3796a80290"
  },
  {
    "url": "page/browser-window-open-intercept/index.html",
    "revision": "20987b9e0091910384270a9525024c0d"
  },
  {
    "url": "page/github-pages/index.html",
    "revision": "37739fe1bca1e9204846cf567e5431c1"
  },
  {
    "url": "page/js-traversing/index.html",
    "revision": "fdfae28592ec9027a90c891eae9784b5"
  },
  {
    "url": "page/mobx-use-record/index.html",
    "revision": "30bb65a04c359b0306d507b7176280ae"
  },
  {
    "url": "page/module.exports-and-exports/index.html",
    "revision": "d286321588af44f9805d964e013cdd82"
  },
  {
    "url": "page/Multiple-asynchronous-collaboration/index.html",
    "revision": "43073d47d965625a0477cd8bc5c471c6"
  },
  {
    "url": "page/weapp-save-base64/index.html",
    "revision": "0be66fcb3dba8d2ffe3455a131fc531a"
  },
  {
    "url": "timeline/index.html",
    "revision": "0cfd8bb3c380caad38247740fee01060"
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
