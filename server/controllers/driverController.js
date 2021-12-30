import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import DriverModel from "../models/driverModel.js";

const secret = 'test';

export const driverSignup = async (req, res) => {
    const { name,email,dateOfBirth,phone, password, car, experience,carNumber } = req.body;

    try {
        const oldUser = await DriverModel.findOne({ email });

        if (oldUser) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await DriverModel.create({ name,email,dateOfBirth,phone, password: hashedPassword,car,experience,carNumber });

        const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

        res.status(201).json({ result, token });
        //console.log('success - driver signup',result)
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });

        console.log(error);
    }
};
export const driverSignIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const oldUser = await DriverModel.findOne({ email });

        if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

        res.status(200).json({ result: oldUser, token });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
