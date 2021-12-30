import express from "express";
import {
    getTrips,
    getTripsBySearch,
    updateTrip,
    deleteTrip,
    likeTrip,
    getTrip,
    createTrip
} from "../controllers/tripsController.js";
import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/search',getTripsBySearch)
router.get('/:id', getTrip);
router.get('/',getTrips)
router.post('/createTrip',auth,createTrip)
router.patch('/:id',auth,updateTrip)
router.delete('/:id',auth,deleteTrip)
router.patch('/:id/likeTrip',auth,likeTrip)

export default router;