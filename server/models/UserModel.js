import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
    username: {type: String, required: true, trim: true},
    email: {type: String, required: true, unique: true, trim: true},
    password: {type: String, required: true, trim: true}, 
    
    //optionals
    profileImage: { type: String },  
    jobtitle:{type: String, trim: true},
    company:{type: String, trim: true},
    skills:{type: String, trim: true},
    bio:{type: String, trim: true},
},
{timestamps: true}
)


const User = mongoose.model('User', userSchema);
export default  User;

