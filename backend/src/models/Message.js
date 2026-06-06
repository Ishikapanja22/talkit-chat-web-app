const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema({
senderEmail:{
type:String,
required:true
},
receiverName:{
type:String,
required:true
},
senderName:{
type:String,
required:true
},
content:{
type:String,
required:true
},
createdAt:{
type:Date,
default:Date.now
}
});
module.exports = mongoose.model(
'Message',
messageSchema
);