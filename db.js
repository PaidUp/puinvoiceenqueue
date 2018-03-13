const MongoClient = require('mongodb').MongoClient
const config = require('./config')
const url = config.mongo.url
let db

class Db {
  connect () {
    return new Promise((resolve, reject) => {
      try {
        MongoClient.connect(url, (err, client) => {
          if (err) {
            return reject(err)
          }
          resolve(client)
        })
      } catch (error) {
        reject(error)
      }
    })
  }
}

db = new Db()

module.exports = db
