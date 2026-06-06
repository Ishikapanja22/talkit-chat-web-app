const Message =
require('../models/Message');
exports.sendMessage =
async(req,res)=>{
try{
const message =
await Message.create(
req.body
);
res.status(201).json(
message
);
}
catch(error){
res.status(500).json({
message:error.message
});
}
};
exports.getMessages =
async(req,res)=>{
try{
const {
senderName,
receiverName
} = req.params;
const messages =
await Message.find({
$or:[
{
senderName:
senderName,
receiverName:
receiverName
},
{
senderName:
receiverName,
receiverName:
senderName
}
]
}).sort({
createdAt:1
});
res.json(messages);
}
catch(error){
res.status(500).json({
message:error.message
});
}
};
