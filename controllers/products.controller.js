import productModel from "../models/product.model.js";

export async function fetchProducts(req, res) {
    try {
        const products = await productModel.find({});
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({message: "an error occurred"});
    }
}

export async function singleProduct(req, res) {
    try {
        const product = await productModel.findById(req.params.id);

        if(!product) {
            return res.status(404).json({message: "product not found"});
        }
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({message: "an error occurred"});
    }
}
