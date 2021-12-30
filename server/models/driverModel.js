import mongoose from "mongoose";

const driverSchema = mongoose.Schema({
    name: { type: String, required:  true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    password: { type: String, required: true },
    car: { type: String, required: true },
    experience: { type: Number, required: true },
    carNumber: { type: String, required: true },
    role: { type: String,default:'Водитель'},
    id: { type: String },
});

export default mongoose.model("Driver", driverSchema);