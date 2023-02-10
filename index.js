var express = require("express");
var bodyParser = require("body-parser");
const fileUpload = require('express-fileupload');
const path = require('path');
var app = express();
var MqttClass = require('./mqtt-class');
app.use(express.static(path.join(__dirname)));
app.use(
  fileUpload({
    extended: true,
  })
);
app.use(express.json());
var mqttClient = new MqttClass();
mqttClient.connect();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Routes
app.post("/send-mqtt", function(req, res) {
  var a = req.body.sector
  mqttClient.sendMessage(a);
  res.status(200).send("Message sent to mqtt");
});

var server = app.listen(3001, function () {
    console.log("app running on port.", server.address().port);
});