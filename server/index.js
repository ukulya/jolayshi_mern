import express from 'express'
import bodyParser from "body-parser";
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import passengerRoutes from './routes/passengerRoutes.js'
import driverRoutes from './routes/driverRoutes.js'
import tripsRoutes from './routes/tripsRoutes.js'
import PassengerModel from "./models/passengerModel.js";
import TripModel from "./models/tripModel.js";
import DriverModel from "./models/driverModel.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
dotenv.config()

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())

app.use('/passenger',passengerRoutes)
app.use('/driver',driverRoutes)
app.use('/trips',tripsRoutes)
app.use('/user',userRoutes)
/*app.get('/trips', async function (req, res) {
    const trips = await TripModel.find()
    res.json({trips})
})
app.get('/', function (req, res) {
    res.json({message:'hello world'})
})
app.get('/passengers',async function (req, res) {
    //const data = req.body;
    //console.log(data) // {}
    const passengers = await PassengerModel.find()
    //res.json({data}) // {}
    res.json({passengers})
})
app.get('/drivers', async function (req, res) {
    const drivers = await DriverModel.find()
    res.json({drivers})
})*/
const CONNECTION_URL = 'mongodb://localhost:27017/jolayshi'

const PORT = 5000

mongoose.connect(CONNECTION_URL)
    .then(()=>app.listen(PORT,() => console.log(`server running on PORT: http://localhost:${PORT}`)))
    .catch((e)=> console.log(e,'did not connect'))

