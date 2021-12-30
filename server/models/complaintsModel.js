import mongoose from "mongoose";

const complaintsSchema = mongoose.Schema({
    complaints: [
        {
            sender:{
                type: String,
                maxlength: 50,
                required: true,
                default: ''
            },
            role: String,
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

export default mongoose.model("Complaints", complaintsSchema);