import mongoose from "mongoose";

const messagesSchema = mongoose.Schema({
    conversations: [
        {
            sender:{
                type: String,
                maxlength: 50,
                required: true,
                default: ''
            },
            message:{
                type: String,
                maxlength: 1000,
                required: true,
                default: ''
            },
            msgAt:{
                type: Date,
                default: Date.now(),
                required: true
            }
        }
    ]
});

export default mongoose.model("Messages", messagesSchema);