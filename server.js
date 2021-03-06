// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require('body-parser');

// App Setup
const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 
  "mongodb://localhost/googlebooks", 
{ useNewUrlParser: true });

// Start listening on PORT
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
