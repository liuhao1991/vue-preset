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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e7c16848499b2735ebaa3fc61a67fc2f"
  },
  {
    "url": "assets/css/0.styles.63f3a1c3.css",
    "revision": "810a64aeffbb187726c2e71083bbf0fa"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.9f734292.js",
    "revision": "0b0cd1f7b5e95ff2dbe95d1caef95945"
  },
  {
    "url": "assets/js/3.1b3b7957.js",
    "revision": "89e2ea57f99ff83bedfc76ff65c3d916"
  },
  {
    "url": "assets/js/4.52c9d1e9.js",
    "revision": "92a45db91201fdb2bab443bdab66cfe1"
  },
  {
    "url": "assets/js/app.61333c65.js",
    "revision": "d4e8e265bc2f507295bb57b7c97f67c2"
  },
  {
    "url": "index.html",
    "revision": "599463e4ddbfd885b71b17a721ab5423"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
