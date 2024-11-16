import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import createTokenAndSaveCookie from '../jwt/generateToken.js'

export const signup = async (req, res) => {
    const { name, email, password, confirmpassword } = req.body;

    try {
        if (password !== confirmpassword) {
            return res.status(400).json({ message: "Password do not match" })
        }

        const user = await User.findOne({ email })

        if (user) {
            return res.status(400).json({ message: "Email already exists" })
        }


        //hashing password

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        if (newUser) {
            createTokenAndSaveCookie(newUser._id, res);
            res.status(201).json({ message: "User registered sucessfully", newUser })
        }





    } catch (error) {
        console.log(error)
    }
}