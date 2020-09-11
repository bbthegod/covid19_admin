/* eslint-disable func-names */
/* eslint-disable no-restricted-globals */
console.log('Asdasdass');
self.addEventListener('push', e => {
  const data = e.data.json();
  self.registration.showNotification(data.title, {
    body: 'Notified by Traversy Media!',
    icon: 'http://image.ibb.co/frYOFd/tmlogo.png',
  });
  setTimeout(() => {
    self.registration.getNotifications().then(function(notifications) {
      notifications.forEach(function(notification) {
        notification.close();
      });
    });
  }, 2000);
});
