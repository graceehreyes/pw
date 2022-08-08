var push = require('web-push')

let vapidKeys = {
    publicKey: 'BB7R8LGaIata-Q0wRexEy1bpSL8PjCgbvinTFQj_q6HVTbmxq-VWgQ8V_qeVUnioCMVcRf6-R9zWstSeyyRwVro',
    privateKey: 'SRe93LJxXH-0ZC2G3Y7rekq3JbT-0l8P7195BeihwA8'
  }

  push.setVapidDetails('mailto:sample@sample.com', vapidKeys.publicKey, vapidKeys.privateKey)
  
  let sub = {};

  push.sendNotification(sub, 'test message')