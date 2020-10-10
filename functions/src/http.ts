import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';
admin.initializeApp();

// http request 1
export const randomNumber = functions.https.onRequest((req, res) => {
  const number = Math.round(Math.random() * 100)
  console.log(number)
  res.send(number.toString())
})

export const goToGoogle = functions.https.onRequest((req, res) => {
  res.redirect("https://google.com")
})

export const sayMyName = functions.https.onRequest((req, res) => {
  let name = req.query.name;
  if (!name) name = "friend"
  res.send(`Hello, ${name}`)
})

// export const sayHello = functions.https.onCall((data, context) => {
//   return `hello, friend.`
// })