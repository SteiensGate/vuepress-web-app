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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "24ed5c4169a44557f119105624b60bcd"
  },
  {
    "url": "assets/css/0.styles.a6229f19.css",
    "revision": "3338b641ff6aa711a48b388099497403"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.9ae675b4.js",
    "revision": "da68ef8f48354f09acc4b952d41b379d"
  },
  {
    "url": "assets/js/10.5ae4662e.js",
    "revision": "44b01f4fc1e2586982a25de2424ff18a"
  },
  {
    "url": "assets/js/11.a4f8c3cc.js",
    "revision": "d782a6bea532505685b4b1ca9b405fdf"
  },
  {
    "url": "assets/js/12.ce11e7ca.js",
    "revision": "45b5465ddd578eba289858fc44a3b656"
  },
  {
    "url": "assets/js/13.cc739f24.js",
    "revision": "a87864dd0caef7c088a216dac76de6a8"
  },
  {
    "url": "assets/js/14.670a824e.js",
    "revision": "d4efbdb556436f66059f2f3f2928caf5"
  },
  {
    "url": "assets/js/15.84a56836.js",
    "revision": "8affc5c95bdd549fc8fd36dd24f557ab"
  },
  {
    "url": "assets/js/16.3677bc96.js",
    "revision": "1ff9c64f5c040b991a8737fa55d8d9a7"
  },
  {
    "url": "assets/js/17.3966becc.js",
    "revision": "bdc937f953c108ee9c311fe1247fb61c"
  },
  {
    "url": "assets/js/18.6a9a3f15.js",
    "revision": "0fd1a2b00328a970507ce1d6c380dfac"
  },
  {
    "url": "assets/js/19.68cc138a.js",
    "revision": "ef5dcf3d2b3d3e09a5e9cc3c06188ce2"
  },
  {
    "url": "assets/js/2.f3935994.js",
    "revision": "bbb17b0c06bd845a659d1ec938d0576a"
  },
  {
    "url": "assets/js/20.ce3e66c0.js",
    "revision": "01fb6a3ef9364578a75e49a667f0d626"
  },
  {
    "url": "assets/js/21.5c2ab4e2.js",
    "revision": "f381e0d04cfb55610fe3e406838467f2"
  },
  {
    "url": "assets/js/22.5db2285c.js",
    "revision": "51d4deb454c7389eaa2cdfbb1a31c8d2"
  },
  {
    "url": "assets/js/23.83f2f15d.js",
    "revision": "9840a2f1b565179016c8479e0ab9a63a"
  },
  {
    "url": "assets/js/24.926db55c.js",
    "revision": "71defedcc78dd2db04a0a4d710667cb5"
  },
  {
    "url": "assets/js/25.bb76df51.js",
    "revision": "ee9f2b5f0364ea8789781937b7973394"
  },
  {
    "url": "assets/js/26.254f1a85.js",
    "revision": "5b26125128d1d8d8c9f3c83ef473088e"
  },
  {
    "url": "assets/js/27.0bc1e374.js",
    "revision": "bb5690ef47ccb06f681948b310847566"
  },
  {
    "url": "assets/js/28.8f8af66d.js",
    "revision": "4f6578c50b91a2358f84d87ea40f0fc4"
  },
  {
    "url": "assets/js/29.c8ecf996.js",
    "revision": "0cbb336b96f0d456460ee7bf16bb522f"
  },
  {
    "url": "assets/js/3.dcea37e2.js",
    "revision": "6413e3dc54cbd30aea88dd0698bf897d"
  },
  {
    "url": "assets/js/30.0349d56d.js",
    "revision": "fd6588728062bde1bb60071acdb5c9e7"
  },
  {
    "url": "assets/js/31.dc1577ea.js",
    "revision": "29ab68553ceb616b96f59863ffe034c2"
  },
  {
    "url": "assets/js/32.f7d3428f.js",
    "revision": "c3c20f11b2c06ccfcae9edc2e8ab5f3a"
  },
  {
    "url": "assets/js/33.81a1f3de.js",
    "revision": "7e1110caa432341b8f48897b60e3432d"
  },
  {
    "url": "assets/js/34.b0fb11af.js",
    "revision": "8bde9cc1a8f8ef244d73efd0a3e0d2d7"
  },
  {
    "url": "assets/js/35.8fbb75a7.js",
    "revision": "96bbd8a99c961761c13a3ed28a7fbf7a"
  },
  {
    "url": "assets/js/36.45eff5b3.js",
    "revision": "14256fcc876841126cb23e2ba9896864"
  },
  {
    "url": "assets/js/37.f35e5f8f.js",
    "revision": "92066c225782977dc2f6787ca8f0b176"
  },
  {
    "url": "assets/js/38.09fa585d.js",
    "revision": "862cb534b6c81e92cf7d3e9bec346d2b"
  },
  {
    "url": "assets/js/39.f06ff2c0.js",
    "revision": "262bd3ca7e52f8b9d2d600d67013b808"
  },
  {
    "url": "assets/js/5.6b8fbb79.js",
    "revision": "80fa0702e45466ef0c4baf55e1879454"
  },
  {
    "url": "assets/js/6.8f9f667b.js",
    "revision": "55c3e2d95d1c6ef4b906c57b4e319ea2"
  },
  {
    "url": "assets/js/7.04be6fc1.js",
    "revision": "04f3ef14af1938e2e0e2907c8eabaf7b"
  },
  {
    "url": "assets/js/8.5bc15774.js",
    "revision": "9966710cb67048daccc25312c8c7d209"
  },
  {
    "url": "assets/js/9.c905988f.js",
    "revision": "df96929c7695b1d0567f133e8826c10c"
  },
  {
    "url": "assets/js/app.25c5836d.js",
    "revision": "f8facad306eb276bd52f52c8876846ee"
  },
  {
    "url": "assets/js/vendors~docsearch.919c6b64.js",
    "revision": "564de09df6e552159a1a398ba948420a"
  },
  {
    "url": "en/application/index.html",
    "revision": "62e61d9e7c1a32955a43f261de57119c"
  },
  {
    "url": "en/index.html",
    "revision": "610ec7bb13beaeaa0be5681f8399a511"
  },
  {
    "url": "google21c733509a589aaa.html",
    "revision": "dc170db798841bd226dabf5217b26a1f"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "bbe9fcca4132438afbd61d01f5b573b9"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "5de773e7f554dc38c354662e62bbde3c"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "c924d6c1d7abf0827bf05e7f533d41c4"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "5285f5460f1f76972a12d741280b73cb"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "cc40dfd01cf3b235ce6a10ebedec10c0"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "2a0b600f3ad0d71d9a6f789b99d3609a"
  },
  {
    "url": "icons/mstile-144x144.png",
    "revision": "d9e30f1bb3c8825211698eb1de034288"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "8230c53bdf042e4a40d3f61e3d1e6b8b"
  },
  {
    "url": "icons/mstile-310x150.png",
    "revision": "80aeead9a626b8e46289d81c90d0f264"
  },
  {
    "url": "icons/mstile-310x310.png",
    "revision": "1a07aeea0d6762459b94e520bbacec69"
  },
  {
    "url": "icons/mstile-70x70.png",
    "revision": "51884ae4c1403f79bf48adb9ca3427df"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "ee5048b66d53514bd4e6535007eef213"
  },
  {
    "url": "images/MG-1P.png",
    "revision": "b33194b1fcd1a81287fee93e49e43c86"
  },
  {
    "url": "index.html",
    "revision": "635434d05a952208dd4b62c87c8cc869"
  },
  {
    "url": "logo.png",
    "revision": "bbe9fcca4132438afbd61d01f5b573b9"
  },
  {
    "url": "love.svg",
    "revision": "dce92620955225095706c1f4a9010533"
  },
  {
    "url": "zh/application/index.html",
    "revision": "cc27c982aa9f7a1e910a2d02dd232b19"
  },
  {
    "url": "zh/article/awesome-quickapp.html",
    "revision": "a5169172b9ba1dadb6f32f437f239e0e"
  },
  {
    "url": "zh/article/beautify-vue-by-eslint-and-prettier.html",
    "revision": "1a0bc4c47888363c0238fe102f03bb1a"
  },
  {
    "url": "zh/article/develop-quick-app-experience-notes.html",
    "revision": "347c39adb647ea3bfb058581db8e47fc"
  },
  {
    "url": "zh/article/how-to-elegantly-handle-quickapp-request.html",
    "revision": "f8aaa70ebfb5e41aef552c4384bc6c03"
  },
  {
    "url": "zh/article/index.html",
    "revision": "439446a99d919ee64dace4f2f9e09fd1"
  },
  {
    "url": "zh/article/quickapp-boilerplate-template.html",
    "revision": "d3149443f67283eb81682bbb2eac762a"
  },
  {
    "url": "zh/article/talk-about-my-blogs.html",
    "revision": "1667d4a13115b96c082793eddd6b7953"
  },
  {
    "url": "zh/article/talk-about-nice-links.html",
    "revision": "a8b789dd68adfcdf4d737e762c7eaf81"
  },
  {
    "url": "zh/article/top-100-front-end-awesome-awesome-list.html",
    "revision": "caf4523094e249d19c4d1a5d49449b29"
  },
  {
    "url": "zh/article/vue-webpack-boilerplate-template.html",
    "revision": "be12aa3a31afe5e1edb7d146f666e667"
  },
  {
    "url": "zh/blog/csdn-blog.html",
    "revision": "c34e696d8c372bc382f509e5c5f31a60"
  },
  {
    "url": "zh/blog/docz-blog.html",
    "revision": "18d88b9e5b9fd1ebab4c9fe18507c60a"
  },
  {
    "url": "zh/blog/ghost-blog.html",
    "revision": "2423cc83d6994c31af0ff4f92033fbf6"
  },
  {
    "url": "zh/blog/hexo-blog.html",
    "revision": "4e398710a4fb40471b28c611bf66078b"
  },
  {
    "url": "zh/blog/index.html",
    "revision": "9ab78043cbf87b112ea41248830a7b01"
  },
  {
    "url": "zh/blog/jekyll-blog.html",
    "revision": "1643ef782e1fe9de8595a2661a6a221b"
  },
  {
    "url": "zh/blog/jianshu-blog.html",
    "revision": "0e9813f2f39189d444270c6966c173b8"
  },
  {
    "url": "zh/blog/vuepress-blog.html",
    "revision": "1fb093c2887e18e829849b2f2257cbd1"
  },
  {
    "url": "zh/blog/wechat-blog.html",
    "revision": "d0df9581c307eb130720c49553e0ebd2"
  },
  {
    "url": "zh/index.html",
    "revision": "2e3de8089f211e2f9383ff104193ed70"
  },
  {
    "url": "zh/recruit/index.html",
    "revision": "e7a10501b8becdce7ba91d48d5b3b875"
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
