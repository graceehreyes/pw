self.addEventListener('push', () => {
    self.registration.sendNotification('data.title',{
        body: 'Notified by AWS!!',
        icon: 'https://www.awsys-i.com/res/nav-icon-hover.png',
    });
});