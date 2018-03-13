module.exports = {
  mongo: {
    url: '',
    db: '',
    collection: 'pu_commerce_invoices'
  },
  sqs: {
    credentials: {
      access: '',
      secret: '',
      region: 'us-east-1'
    },
    workers: 2,
    queueName: 'invoice-dev'
  }
}
