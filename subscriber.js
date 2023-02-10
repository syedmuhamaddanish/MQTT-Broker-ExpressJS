const mqtt = require('mqtt')

const host = 'broker.hivemq.com'
//const port = '1883'

const connectUrl = `mqtt://${host}`
const client = mqtt.connect(connectUrl)


const topic = 'mytopic'
client.on('connect', () => {
  client.subscribe(topic);    // client subscribe to the topic
  console.log("Client has subscribed to the topic")
})

client.on('message', (topic, message) => {
  console.log(message.toString())
  //client.end();   //client disconnect
  //console.log("client closed")
})