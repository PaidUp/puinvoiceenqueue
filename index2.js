var sqs = require('sqs')

var queue = sqs({
  access: '',
  secret: '',
  region: 'us-east-1' // defaults to us-east-1
})

// push some data to the test queue
// queue.push('invoice-dev', {
// 	some1:'data'
// }, function () {
//     console.log('complete...')
// 	// complete
// });

// pull messages from the test queue
queue.pull('invoice-dev', function (message, callback) {
  console.log('someone pushed', message)
  callback() // we are done with this message - pull a new one
	            // calling the callback will also delete the message from the queue
})
