const redis = require("redis");
const client = redis.createClient();

client.on("error", function () {
});

const channel = "my-channel";
const message = "Hello, Redis Pub/Sub !";

client.publish(channel, message, function (error) {
    if (error) console.error("error: ", error);
    else console.log("Message published successfully !");
});

