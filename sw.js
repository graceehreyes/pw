self.addEventListener('push', () => {
    self.registration.sendNotification(title, options);
});