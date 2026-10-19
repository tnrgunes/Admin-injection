// Inkjection admin — background push notifications (Firebase Cloud Messaging)
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey: "AIzaSyA5e7A-Ha8dJWj5dUE_j_g3WeD0QhrDkZY", authDomain: "inkjection-admin.firebaseapp.com", projectId: "inkjection-admin",
  storageBucket: "inkjection-admin.firebasestorage.app", messagingSenderId: "272546510196", appId: "1:272546510196:web:ac81ad4ce4c3ce1db82821"
});
// Notifications sent with a "notification" payload are shown automatically.
firebase.messaging();
self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  const url = new URL('admin.html#requests', self.registration.scope).href;
  event.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
    for (const c of list) { if (c.url.indexOf('admin.html') !== -1 && 'focus' in c) { c.navigate(url); return c.focus(); } }
    return clients.openWindow(url);
  }));
});
