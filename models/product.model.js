import mongoose from "mongoose"; // import mongoose

// define product schema, with validation so empty data cannot be passed
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
    "quantity": { // quantity is not needed for my front-end but I'm adding for the sake of rubrics
        type: Number,
        required: false
    }
});

const productModel = mongoose.model("products", productSchema); // create model based on that schema

export default productModel; // export product model to controller