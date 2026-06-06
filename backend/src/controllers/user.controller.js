const User = require('../models/User');
exports.updateProfile = async(req,res)=>{
try{
const {
userId,
name,
email,
bio
} = req.body;
const updatedUser =
await User.findByIdAndUpdate(
userId,
{
name,
email,
bio
},
{
new:true
}
);
res.json(updatedUser);
}
catch(error){
res.status(500).json({
message:error.message
});
}
};