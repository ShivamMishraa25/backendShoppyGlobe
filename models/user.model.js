import mongoose from 'mongoose'; // import mongoose for schema and model

// define user's schema, with validation, so empty data can't be passed
const userSchema = mongoose.Schema({
    fullName: {
        type: String, // type string
        required: true, // tells that this field cannot be left empty
        trim: true // for extra wide spaces
    },
    email: {
        type: String,
        unique: true, // email has to be unique
        lowercase: true, // characters have to be lowercase
        required: [true, "Email is Required"] // if not available then send this message
    },
    password: {
        type: String,
        required: [true, "Password is Required"],
        minlength: [6, "Password must be at least 6 characters"], // sets min length of password
        // no maxlength because hashed password may take alot of characters
    }
});

const userModel = mongoose.model("users", userSchema); // create user model from user schema

export default userModel; // export user model to be used in controller logic