const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://pudevelop:xEbiMFBtX48ObFgC@pu-dev-shard-00-00-4nodg.mongodb.net:27017,pu-dev-shard-00-01-4nodg.mongodb.net:27017,pu-dev-shard-00-02-4nodg.mongodb.net:27017/develop?ssl=true&replicaSet=pu-dev-shard-0&authSource=admin'
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
