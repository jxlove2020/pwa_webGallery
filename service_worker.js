const sCacheName = 'webGallery-pwa'; // 캐시제목 선언
const aFilesToCache = [
  // 캐시할 파일 선언
  './',
  './index.html',
  './css/style.css',
  './manifest.json',
  './images/favicon.png',
  './images/16x16.png',
  './images/32x32.png',
  './images/192x192.png',
  './images/512x512.png',
  './images/food/1.jpg',
  './images/food/2.jpg',
  './images/food/3.jpg',
  './images/food/4.jpg',
  './images/food/5.jpg',
  './images/food/6.jpg',
  './images/food/7.jpg',
  './images/food/8.jpg',
  './images/food/9.jpg',
  './images/food/10.jpg',
  './images/food/11.jpg',
  './images/food/12.jpg',
  './images/food/13.jpg',
  './images/food/14.jpg',
  './images/food/15.jpg',
  './images/me/1.jpg',
  './images/me/2.jpg',
  './images/me/3.jpg',
  './images/me/4.jpg',
  './images/me/5.jpg',
  './images/me/6.jpg',
  './images/me/7.jpg',
  './images/me/8.jpg',
  './images/me/9.jpg',
  './js/ie.js',
  './js/isotope.pkgd.min.js',
  './js/main.js',
];

// 2.서비스워커를 설치하고 캐시를 저장함
self.addEventListener('install', pEvent => {
  console.log('서비스워커 설치함!');
  pEvent.waitUntil(
    caches.open(sCacheName).then(pCache => {
      console.log('파일을 캐시에 저장함!');
      return pCache.addAll(aFilesToCache);
    })
  );
});

// 3. 고유번호 할당받은 서비스 워커 동작 시작
self.addEventListener('activate', pEvent => {
  console.log('서비스워커 동작 시작됨!');
});

// 4.데이터 요청시 네트워크 또는 캐시에서 찾아 반환
self.addEventListener('fetch', pEvent => {
  pEvent.respondWith(
    caches
      .match(pEvent.request)
      .then(response => {
        if (!response) {
          console.log('네트워크에서 데이터 요청!', pEvent.request);
          return fetch(pEvent.request);
        }
        console.log('캐시에서 데이터 요청!', pEvent.request);
        return response;
      })
      .catch(err => console.log(err))
  );
});
