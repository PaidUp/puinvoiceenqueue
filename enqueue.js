const sqs = require('sqs')
let enqueue

const queue = sqs({
  access: '',
  secret: '',
  region: 'us-east-1' // defaults to us-east-1
})
const queueName = 'invoice-dev'

class Enqueue {
  push (message) {
    return new Promise((resolve, reject) => {
      queue.push(queueName, message, err => {
        if (err) return resolve(false)
        resolve(message._id)
      })
    })
  }
}

enqueue = new Enqueue()
module.exports = enqueue
