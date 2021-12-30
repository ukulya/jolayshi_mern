import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import PassengerModel from "../models/passengerModel.js";

const secret = 'test';

export const passengerSignup = async (req, res) => {
    const { name,email,dateOfBirth,phone, password} = req.body;

    try {
        const oldUser = await PassengerModel.findOne({ email });

        if (oldUser) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await PassengerModel.create({ name,email,dateOfBirth,phone, password: hashedPassword});

        const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

        res.status(201).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });

        console.log(error);
    }
};
export const passengerSignIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const oldUser = await PassengerModel.findOne({ email });

        if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

        res.status(200).json({ result: oldUser, token });
        console.log('validation success',oldUser,password)
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
        console.log('validation failed')
    }
};
export const getPassenger = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await PassengerModel.findById(id);

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.log('error coming from getPassenger')
    }
}
