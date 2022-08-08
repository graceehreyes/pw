var push = require('web-push')

let vapidKeys = {
    publicKey: 'BB7R8LGaIata-Q0wRexEy1bpSL8PjCgbvinTFQj_q6HVTbmxq-VWgQ8V_qeVUnioCMVcRf6-R9zWstSeyyRwVro',
    privateKey: 'SRe93LJxXH-0ZC2G3Y7rekq3JbT-0l8P7195BeihwA8'
  }

  push.setVapidDetails('mailto:sample@sample.com', vapidKeys.publicKey, vapidKeys.privateKey)

  let sub = {
    endpoint:'https://fcm.googleapis.com/fcm/send/diBwlrv8sGU:APA91bHIrjowR94Dm3sI-5xSPPWp0Nrgv5YDajQD2fTFDFxC5nkmMLxp41Dest6iXX0s0meE2fG1A1Tr2LdKuiQU7kXzYiHZp-2Ln5iTpiUp3UqYpwT4J93enFWKZvp8S4jGOHEswGvB',
    expirationTime:null,
    keys:{
        p256dh:'BP-SHxOW8FVqYNZUeBvGl9MPu5GYBW1YdMxMi1c64G0f4d3KAVcnzuY2bzF2JQ94MW2SKds4jDgHVrTU0lNvDGE',
        auth:'mtqdy96s6YTrXPgMTl43Pg'
    }
}

  push.sendNotification(sub, 'test message')