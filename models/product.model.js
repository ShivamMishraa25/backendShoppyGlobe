import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    "title": {
        type: String,
        required: true
    },
    "description": {
        type: String,
        required: true
    },
    "category": {
        type: String,
        required: true
    },
    "price": {
        type: Number,
        required: true
    },
    "brand": {
        type: String,
        required: true
    },
    "thumbnail": {
        type: String,
        required: true
    },
    "quantity": { // quantity is not needed for my front-end but Im adding for rubrics
        type: Number,
        required: false
    }
});

const productModel = mongoose.model("products", productSchema);

export default productModel;