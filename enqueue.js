const sqs = require('sqs')
const config = require('./config')
let enqueue

const queue = sqs(config.sqs.credentials)

class Enqueue {
  push (message) {
    return new Promise((resolve, reject) => {
      queue.push(config.sqs.queueName, message, err => {
        if (err) return resolve(false)
        resolve(message._id)
      })
    })
  }
}

enqueue = new Enqueue()
module.exports = enqueue
