const redis = require("redis");
const client = redis.createClient();

client.on("error", function (error) {
    console.error("error: ", error);
});

const channel = "my-channel";

client.subscribe(channel, function(error) {
    if (error) {
        console.error("Failed to subscribe to channel:", error);
    } else {
        console.log("Subscribed to channel:", channel);
    }
});

client.on("message", function(channel, message) {
    console.log("Received message from channel", channel + ":", message);
});