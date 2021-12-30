import TripModel from "../models/tripModel.js";
import mongoose from "mongoose";
import express from 'express';

const router = express.Router();

export const getTrips = async (req, res ) => {

    try {
        const trips = await TripModel.find();

        res.status(200).json(trips);
    }catch (e){
        res.status(404).json({message:e.message})
    }

}

export const getTripsBySearch = async (req,res ) => {
    const {searchQuery,tags} = req.query
    try {
        const title = new RegExp(searchQuery,'i');
        const posts = await TripModel.find({$or:[{title},{tags:{$in: tags.split(',')}}]});
        res.json({data: posts})
    }catch (e){
        res.status(404).json({message:e.message})
    }

}

export const getTrip = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await TripModel.findById(id);

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createTrip = async (req, res ) => {
    const trip = req.body;

    const newTrip = new TripModel({...trip,date:new Date(trip.date).toLocaleDateString(),creatorId:req.userId,createdAt: new Date().toLocaleString()})
    try {
        await newTrip.save();
        res.status(201).json(newTrip) // 201 - successful creation
        //console.log('success - new trip was created',newTrip)
    }catch (e){
        res.status(409).json({message:e.message})
        console.log('could not create trip')
    }
    //res.send('post creation')
}

export const updateTrip = async (req, res ) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await TripModel.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deleteTrip = async (req, res ) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no post with that id');

    await TripModel.findByIdAndRemove(id)

    //console.log('delete')
    res.json({message: 'post deleted'})
}

export const likeTrip = async (req, res ) => {
    const {id} = req.params;

    if (!req.userId) return res.json({message:'Unauthenticated'})

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no post with that id');

    const post = await TripModel.findById(id)

    const index = post.likes.findIndex((id) => id === String(req.userId))
    // converting like to a dislike

    if (index === -1){
        // like the post
        post.likes.push(req.userId)
    } else {
        // dislike the post
        post.likes = post.likes.filter(id => id !== String(req.userId))
    }

    //const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount + 1},{new: true})
    const updatedPost = await TripModel.findByIdAndUpdate(id, post,{new: true})
    res.json(updatedPost)
    //console.log('updated')
}
export default router;