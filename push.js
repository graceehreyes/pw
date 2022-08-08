var push = require('web-push')

let vapidKeys = {
    publicKey: 'BB7R8LGaIata-Q0wRexEy1bpSL8PjCgbvinTFQj_q6HVTbmxq-VWgQ8V_qeVUnioCMVcRf6-R9zWstSeyyRwVro',
    privateKey: 'SRe93LJxXH-0ZC2G3Y7rekq3JbT-0l8P7195BeihwA8'
  }

  push.setVapidDetails('mailto:sample@sample.com', vapidKeys.publicKey, vapidKeys.privateKey)

  let sub = {
    endpoint:'https://fcm.googleapis.com/fcm/send/eZaQDOEo2R0:APA91bH6CXZ3DvqpuGGvl1gSqu1F3D3KI922NxCp7taPpgqfqsQWqiu5Sp4Z_RZvhuca3aX3XIqdiRgephY7MeuQYrwQ_fjg2KHB9RlFzCVkkg79cRWD1CGZVoC8A_i19dIjqLqO6y0m',
    expirationTime:null,
    keys:{
        p256dh:'BPooRoFAyHlaQ-P9XnOKQpaPHHPLl74XlCa3Zyu7GwClXKX-1NjexCahZ0vaMxg0pNGsYL7nukteHMWKK5rLyTA',
        auth:'M-JyIMTOiES-FwFgd8-KAg'
    }
}

  push.sendNotification(sub, 'test message')