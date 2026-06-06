const express =
require('express');
const router =
express.Router();
const {
sendMessage,
getMessages
} = require(
'../controllers/message.controller'
);
router.post(
'/send',
sendMessage
);
router.get(
'/:senderName/:receiverName',
getMessages
);
module.exports =
router;
