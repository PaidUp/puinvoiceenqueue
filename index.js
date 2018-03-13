const enqueue = require('./enqueue')
const db = require('./db')
const config = require('./config')

module.exports.handler = (event, context, callback) => {
  db.connect().then(client => {
    let collection = client.db(config.mongo.db).collection(config.mongo.collection)
    collection.find({ status: 'pending', dataCharge: { $lte: new Date() } }).toArray((err, items) => {
      if (err) return callback(err)
      Promise.all(items.map(enqueue.push)).then(results => {
        collection.update({ _id: { $in: results } },
          { $set: { status: 'enqueue' } },
          {multi: true},
          (err, data) => {
            if (err) return callback(err)
            client.close()
            callback(null, data.result)
          })
      })
    })
  })
}
