const express = require('express')

//initialize express
const app = express()

const port = 8887
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

const messages = [
  'Hello there.',
  "I'm sorry, I cannot take any requests at this time.",
  'I can tell you how to do that.'
]

//random message from array
// function randomMessage () {
//   let messages = [
//     'Hello there.',
//     "I'm sorry, I cannot take any requests at this time.",
//     'I can tell you how to do that.'
//   ]
//   messages = messages[Math.floor(Math.random() * messages.length)]
//   console.log(messages)
//   return `message: ${messages}`
// }
// randomMessage()
function randomMessage () {
  return messages[[Math.floor(Math.random() * messages.length)]]
}

app.options('/', function(req, res) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send();
});

// When a GET request comes in, have your server reply back with a random message from that array. Send it back in an object, like so: {message: 'hello'}

// app.get('/', function(req, res) {
//   res.send(JSON.stringify({
//     message: randomMessage()
//   }))
// });

app.get('/', function(req, res) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify({
    message: randomMessage()
  }));
});
