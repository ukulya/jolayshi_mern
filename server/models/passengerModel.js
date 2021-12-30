import mongoose from "mongoose";

const passengerSchema = mongoose.Schema({
    name: { type: String, required:  true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String,default:'Пассажир'},
    img: { type: String },
});

export default mongoose.model("Passenger", passengerSchema);