import mongoose from "mongoose";

const tripSchema = mongoose.Schema({
    from: String,
    fromLat: String,
    fromLng: String,
    to: String,
    toLat: String,
    toLng: String,
    creatorId: String,
    creatorName: String,
    price: String,
    date: String,
    createdAt: String,
    time: String,
    seats: Number,
    seatsOccupied: Number,
    childSeat: Boolean,
    luggage: Boolean,
    smoking: Boolean,
    animals: Boolean,
    comment: String
})

export default mongoose.model('Trip',tripSchema)
