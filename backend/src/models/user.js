const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    
    email : {
        type: String,
        unique: true
    },
    password: {type: String},
    token: {type: String},
});
const userModel =  mongoose.model("user", userSchema);
module.exports = userModel;