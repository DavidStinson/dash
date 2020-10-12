import * as functions from 'firebase-functions';
import * as express from 'express'
import * as cors from 'cors'
import * as apiCtrl from './api'

import * as admin from 'firebase-admin';
admin.initializeApp();

// start express
const app = express()

// middleware
app.use(cors({origin: true}))

// routes
app.get("/hey", apiCtrl.hello)

// export
export const api = functions.https.onRequest(app)
