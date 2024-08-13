const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51OMwEWBJcA1v65zHLBRKnxMCYzj124rptGxwCvhRXiWxoTOXdqthHiojnnz6sfoGLFvdR2H3AGiM4LKRn85F5cjF002JGOb416"
);

// - App config
const app = express();

// - Middlewears
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // - Subunits of the currency
    currency: "usd",
  });

  // Ok - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// // - Listen Command
exports.api = functions.https.onRequest(app);

// functions[us-central1-api]: http function initialized (http://127.0.0.1:5001/clone-4f957/us-central1/api).

// const functions = require('firebase-functions')

// const express = require('express')
// const cors = require('cors')
// const stripe = require('stripe') ('XXXXXXX')

// // app config
// const app = express()

// //middlewares
// app.use(cors({ origin: true}))
// app.use (express.json())

// app.get ('/', (request, response) => response.status(200).send ('hello world'))
// // app.get ('/evangadi', (request, response) => response.status(200).send ('Evangadi'))

// app.post('/payments/create', async (request, response) => {
//     try {

//     const total = request.query.total //payment lay ke ? yalewen total endiseten new query malet

//     console.log('Payment Request Recived for this amount >>> ', total)

//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: total, //subunits of currency
//         currency: 'usd',
//     })

//     //202 malet ok created adregalehu smtng
//     response.status(201).send ({
//         clientSecrete: paymentIntent.client_secret,
//     })
//     // res.json({ client_secret: paymentIntent.client_secret })
// } catch (error) {
//     console.log('error',error)

// }
// })

// app.listen(3030,(error)=>{
//     if(error)
//     console.log('error in connection ',error)
// else
//     console.log('connected @ 3030')
// })
