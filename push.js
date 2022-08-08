var push = require('web-push')

let vapidKeys = {
    publicKey: 'BB7R8LGaIata-Q0wRexEy1bpSL8PjCgbvinTFQj_q6HVTbmxq-VWgQ8V_qeVUnioCMVcRf6-R9zWstSeyyRwVro',
    privateKey: 'SRe93LJxXH-0ZC2G3Y7rekq3JbT-0l8P7195BeihwA8'
  }

  push.setVapidDetails('mailto:sample@sample.com', vapidKeys.publicKey, vapidKeys.privateKey)

  let sub = {
    endpoint:'https://fcm.googleapis.com/fcm/send/dOQ43rpICfU:APA91bGTmoakefsN9g1GA0ny8Y0V8f25anpapvNXXkopboe57zsZNTSU5kpZMpDiVaY2y_9dJNrJItCPjlAGHHz7XdIH-Yr0eGAGpZd1nMvpaUTt1xFBCBare4BHTjwGjI6RpdazLTpA',
    expirationTime:null,
    keys:{
      p256dh:'BIZfnQkK4G5YE9z0QZ-K6Opr0S_dC6LLKRW5Rkv56pqSIDL8FkjHPkpiioNZk77RRFjtk9tACSRtGdcWaOhgcxI',
      auth:'oaAzY9AuzVZ1eBWArFrNUA'
  }
}

  push.sendNotification(sub, 'test message')