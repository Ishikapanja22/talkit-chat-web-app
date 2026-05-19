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

/* SEND */

router.post(
'/send',
sendMessage
);

/* HISTORY */

router.get(
'/:senderName/:receiverName',
getMessages
);

module.exports =
router;
