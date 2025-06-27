import mongoose from "mongoose"; // import mongooose to create schema and model based on that schema

// define schema for cart with schema validation, so empty products payloads can't be added
const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const cartModel = mongoose.model("cart", cartSchema); // create model based on that schema

export default cartModel; // export cart model to use it in controller logics