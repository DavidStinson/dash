export { randomNumber, goToGoogle, sayMyName, api } from './http';

// import { WebClient } from "@slack/web-api"
// import * as crypto from 'crypto';
// import * as tsscmp from 'tsscmp';
// import { messaging } from 'firebase-admin';

// const bot = new WebClient(functions.config().slack.token)

// const { PubSub } = require("@google-cloud/pubsub")
// const pubsubClient = new PubSub()



// function verifySlackSignature(req) {
//   // Your signing secret
//   const slackSigningSecret = functions.config().slack.signing_secret;

//   // Grab the signature and timestamp from the headers
//   const requestSignature = req.headers['x-slack-signature'] as string;
//   const requestTimestamp = req.headers['x-slack-request-timestamp'];

//   // Create the HMAC
//   const hmac = crypto.createHmac('sha256', slackSigningSecret);

//   // Update it with the Slack Request
//   const [version, hash] = requestSignature.split('=');
//   const base = `${version}:${requestTimestamp}:${JSON.stringify(req.body)}`;
//   hmac.update(base);

//   // Returns true if it matches
//   return tsscmp(hash, hmac.digest('hex'));
// }


// export const myBot = functions.https.onRequest((req, res) => {
//   // Validate Signature
//   verifySlackSignature(req)

//   const data = JSON.stringify(req.body)
//   const dataBuffer = Buffer.from(data)

//   await pubsubClient
//   .topic()

//   res.sendStatus(200)
// })

// export const slackChannelJoin = functions.pubsub.topic("slack-channel-join")
// .onPublish(async (message, context) => {
//   const { event } = message.json;
//   const { user, channel } = event;

// })