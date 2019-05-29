const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const routes = require('./routes/index')

const app = express()
const port = 3000

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// const {
//   Stitch,
//   ServerApiKeyCredential,
//   RemoteMongoClient,
//   AnonymousCredential,
//   UserApiKeyCredential
// } = require('mongodb-stitch-server-sdk');

// const {
//   RemoteUpdateOptions
// } = require("mongodb-stitch-core-services-mongodb-remote")
// const stitchClient = Stitch.initializeDefaultAppClient('stitch-example-ajqzo');
// const mongoClient = stitchClient.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas")
// const mongoAPIKey = process.env.stitchapikey
// const credentials = new UserApiKeyCredential(mongoAPIKey)


mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/stitch-test', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to mongo db')

});

// Stitch.defaultAppClient.auth.loginWithCredential(credentials)
//   .then(authedId => {
//     console.log(`successfully logged in with id: ${authedId.id}`);
//   })
//   .catch(err => console.error(`login failed with error: ${err}`))

app.use('/', routes)

app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`))
