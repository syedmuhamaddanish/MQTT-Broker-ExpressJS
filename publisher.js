const mqtt = require('mqtt')

const host = 'broker.hivemq.com'
//const port = '1883'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`

const connectUrl = `mqtt://${host}`
const client = mqtt.connect(connectUrl, {
  clientId
})


const topic = '/nodejs/mqtt'
client.on('connect', () => {
    var random = 19;
    if (random < 20) {
      console.log(random)
      client.publish(topic, "random number: " + random.toString())     //client publishes the message
      client.end();
      console.log("client closed")
    }
})
