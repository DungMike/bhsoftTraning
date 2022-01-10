const mongoose = require("mongoose");


const commentSchema = mongoose.Schema({
    prd_id: {
        type: mongoose.Types.ObjectId,
        ref: "products"
    },
    full_name: {
        type: String,
        default: null
    },
    email: {
        type: String,
        default: null
    },
    body: {
        type: String,
        require: true
    },
    
    star: {
        type: Number,
        default: null
    }
}, {
    timestamps: true,
});
const commentModle = mongoose.model("Comments", commentSchema, "comments");
module.exports = commentModle;