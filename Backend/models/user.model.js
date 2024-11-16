


import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true,
        lowercase:true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
       
    },


}, {
    timestamps: true, // Enables `createdAt` and `updatedAt`
}

    
)

const User = mongoose.model("User", userSchema)

export default User