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


export const login = async (req, res) => {
    const { email, password } = req.body;
    try {


        const user = await User.findOne({ email })

        const isMatch = await bcrypt.compare(password, user.password);
        if (!user || !isMatch) {
            res.status(404).json({ message: "Invalid User or Password" })
        }
        createTokenAndSaveCookie(user._id, res);
        res.status(201).json({
            message: "User logged in Successfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
            },
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" })

    }
}


export const  logout = async(req, res) =>{
    try {
        res.clearCookie('jwt');
        res.status(201).json({message:"User Logged out Successfully"})
    } catch (error) {
        console.log(error);
        res.status(501).json({message:"Server Error"})
        
    }
}