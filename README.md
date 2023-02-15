# MQTT broker using API written in ExpressJS

This code is an implementation of MQTT broker in ExpressJS server with a front end implementation. 

This is an MQTT broker API, where a post request is made to ExpressJS server to publish a message through MQTT client library

The subscriber can use subscriber.js file to subscribe to the events and receive the published message through ExpressAPI.

Index.html is a frondend interface with a text input, which can be used to type any message we want to publish using MQTT. 

To run this code first run the command 

``` shell
npm install
```


Then, run the command 

``` shell
node index.js
```


on Terminal 1. Once the Express server is live, you can go to localhost:3001 and type any message to send through MQTT broker.

On Terminal 2, run the command

``` shell
node subscriber.js 
```

where the published messages related to a subscribed topic will be shown in the console. 
