import mongoose from 'mongoose'; // import mongoose for schema and model

// define user's schema, with validation, so empty data can't be passed
const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const userModel = mongoose.model("users", userSchema); // create user model from user schema

export default userModel; // export user model to be used in controller logic