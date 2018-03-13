const enqueue = require('./enqueue')
const db = require('./db')

module.exports.handler = (event, context, callback) => {
  db.connect().then(client => {
    let collection = client.db('testing').collection('pu_commerce_invoices')
    collection.find({}).toArray((err, items) => {
      if (err) return callback(err)
      Promise.all(items.map(enqueue.push)).then(results => {
        callback(null, items)
        client.close()
      })
    })
  })
}
