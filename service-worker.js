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
    "revision": "f08750023e2e1a5e25e7cdb86cf79efb"
  },
  {
    "url": "assets/css/0.styles.fda0cbbe.css",
    "revision": "477d89bb4d11f72a82982b686895b2b4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d4beef52.js",
    "revision": "85fda4cefd1dd15ada131fb0d8d79de6"
  },
  {
    "url": "assets/js/11.659a3afe.js",
    "revision": "b436c4c7c18364a788e7ff3ef2cfb232"
  },
  {
    "url": "assets/js/12.4a604a2c.js",
    "revision": "181a98d353d71d08b8560260f84fdcb6"
  },
  {
    "url": "assets/js/13.cc0dc980.js",
    "revision": "8e98678b8c55a8ce0a944472f766b8da"
  },
  {
    "url": "assets/js/14.c40f8f06.js",
    "revision": "5100136fec272a3b1deb7d35c8c900fe"
  },
  {
    "url": "assets/js/15.e05f7b03.js",
    "revision": "0d591d299f65e613b7be7cbbb0c6a401"
  },
  {
    "url": "assets/js/16.aa9d4236.js",
    "revision": "994de28acfd1f11df55859c14866cec2"
  },
  {
    "url": "assets/js/2.dfbcce04.js",
    "revision": "3bdc2ee13268a1f5aa1f3019945a675b"
  },
  {
    "url": "assets/js/3.60e1acb9.js",
    "revision": "59ee34152afd91de1f846297525e8c2b"
  },
  {
    "url": "assets/js/4.7345b3d3.js",
    "revision": "2fa132515e3b0a4ba1cc77bda1a2bca3"
  },
  {
    "url": "assets/js/5.6d4e0b79.js",
    "revision": "843d4381c85cdcaf856f63a739cdf3d4"
  },
  {
    "url": "assets/js/6.21313b9a.js",
    "revision": "c3cd1358bffcf8a2bf07ae8561c7479d"
  },
  {
    "url": "assets/js/7.d9a57877.js",
    "revision": "557418d2d6ccd934a856942abd460cb5"
  },
  {
    "url": "assets/js/8.c86dc6e5.js",
    "revision": "14953ef4920f346a74df8b82300f951a"
  },
  {
    "url": "assets/js/9.abc06264.js",
    "revision": "17e6b4f71ecaacbe95bb9dcd3a12dd15"
  },
  {
    "url": "assets/js/app.0fda526d.js",
    "revision": "b96c3c06a2fb22fd4f4e65714640bb29"
  },
  {
    "url": "ecosystem.html",
    "revision": "f92256367e6905337d299430d674c441"
  },
  {
    "url": "guide.html",
    "revision": "0ab8457d07827ba2b030ea5dc3085e45"
  },
  {
    "url": "index.html",
    "revision": "311ca33b88fc9f637dbdb9c4d3276bfe"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "76ae73322a267c6d369c672ce8261eda"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "2665d104eaf6690f3418d256b2c33f3f"
  },
  {
    "url": "zh/guide.html",
    "revision": "a11b09c965a8a8f275c9c1be4508b872"
  },
  {
    "url": "zh/index.html",
    "revision": "1594436738b09aed1a2ffafcd339be08"
  },
  {
    "url": "zh/support.html",
    "revision": "4e6c6d5111bac1e1b93e966371af1479"
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
