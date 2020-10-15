const express = require("express");
const conversationController = require("../controllers/conversation");

const router = express.Router();

router.get("/get/channelList", conversationController.getChannelList);
router.get("/get/data", conversationController.getData);
router.get("/get/conversation", conversationController.getConversation);

router.post("/new/message", conversationController.postNewMessage);
router.post("/new/channel", conversationController.postNewChannel);

module.exports = router;
