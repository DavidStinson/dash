import * as functions from 'firebase-functions';
import * as express from 'express'
import * as cors from 'cors'
import * as apiCtrl from './api'

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
  const name = req.query.name
  if (!name) {
    res.status(400).send("HEY! You need to supply a name!")
  } else {
    res.send(`hello, ${name}`)
  }
})


const app = express()

app.use(cors({origin: true}))

app.get("/hey", apiCtrl.hello)

app.get("/hey", (req, res) => {
  res.send("hello, friend")
})

export const api = functions.https.onRequest(app)

// export const sayHello = functions.https.onCall((data, context) => {
//   return `hello, friend.`
// })

// export const doNotSayMyName = functions.https.onRequest((req, res) => {
//   res.send("hello friend")
// })