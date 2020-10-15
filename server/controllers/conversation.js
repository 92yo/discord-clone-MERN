const discordDatabase = require("../models/discord");

exports.getChannelList = (req, res) => {
  discordDatabase.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      let channels = [];

      data.map((channelData) => {
        const channelInfo = {
          id: channelData._id,
          name: channelData.channelName,
        };
        channels.push(channelInfo);
      });
      res.status(200).send(channels);
    }
  });
};

exports.getData = (req, res) => {
  discordDatabase.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
};

exports.getConversation = (req, res) => {
  const id = req.query.id;

  discordDatabase.find({ _id: id }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
};

exports.postNewMessage = (req, res) => {
  const newMessage = req.body;

  discordDatabase.updateOne(
    { _id: req.query.id },
    { $push: { conversation: req.body } },
    (err, data) => {
      if (err) {
        console.log("Error saving message");
        console.log(err);
      } else {
        res.status(201).send(data);
      }
    }
  );
};

exports.postNewChannel = (req, res) => {
  const dbData = req.body;

  discordDatabase.create(dbData, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
};
