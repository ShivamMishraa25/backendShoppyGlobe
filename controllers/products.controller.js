import productModel from "../models/product.model.js"; // import product model

// controller logic for fetching products
export async function fetchProducts(req, res) {

    // try catch blocks for cleaner code and error handling
    try {
        const products = await productModel.find({}); // find ALL products
        res.status(200).json(products); // send ALL products in response
    } catch (err) {
        res.status(500).json({message: "an error occurred"}); // if any error is caught send 500
    }
}

// logic for fetching product details of a single product based on product id
export async function singleProduct(req, res) {
    try {
        const product = await productModel.findById(req.params.id); // find product by id

        // if product is not found
        if(!product) {
            return res.status(404).json({message: "product not found"}); // return 404
        }
        res.status(200).json(product); // else if product is found, send product details
    } catch (err) {
        res.status(500).json({message: "an error occurred"});
    }
}