self.addEventListener('push', () => {
    const data = e.data.json();
    self.registration.sendNotification(data.title,{
        body: 'Notified by AWS!!',
        icon: 'https://www.awsys-i.com/res/nav-icon-hover.png',
    });
});