const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
const discordDatabase = require("./models/discord");
const conversationRoutes = require("./routes/conversation");
const Pusher = require("pusher");

//app config
const app = express();
const port = process.env.PORT || 8000;
const mongoURI = process.env.MONGO_URI;

const pusher = new Pusher({
  appId: "1090944",
  key: "b7cec797c1c1d3c72cd0",
  secret: "65afc6a7a7474ecb6280",
  cluster: "eu",
  useTLS: true,
});

//middlewares
app.use(express.json());
app.use(cors());

//db config
mongoose.connect(mongoURI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("Database Connected");

  const changeStream = mongoose.connection.collection("conversations").watch();

  changeStream.on("change", (change) => {
    if (change.operationType === "insert") {
      pusher.trigger("channels", "newChannel", {
        change: change,
      });
    } else if (change.operationType === "update") {
      pusher.trigger("conversation", "newMessage", {
        change: change,
      });
    } else {
      console.log("Error triggering Pusher");
    }
  });
});

//api routes
app.use("/", conversationRoutes);

//listening port
app.listen(port, () => {
  console.log(`listening on localhost:${port}`);
});
