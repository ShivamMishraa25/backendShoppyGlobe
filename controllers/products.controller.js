import productModel from "../models/product.model.js"; // import product model

// create product for backend pupose 
export async function addProducts(req, res) {

    // try catch blocks for cleaner code and error handling
    try {
        const newProduct = await productModel.create(req.body); // create a new product with req.body
        res.status(201).json({product: newProduct}); // send new product in response
    } catch (err) {
        res.status(500).json({message: err.message}); // if any error is caught send 500
    }
}

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

// logic for updating a product
export async function updateProduct(req, res) {
    try {
        const {id} = req.params;

        // find product by id and update
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {new: true});

        // if product id could not be found then, send 404 response
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // if everything works fine then send success message
        return res.status(200).json({message: 'Product updated successfully', product: updatedProduct});
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

// logic for deleting a product
export async function deleteProduct(req, res) {
    try {
        const {id} = req.params;

        // find product by id and delete
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' }); // if not deleted then send product not found
        }

        return res.status(200).json({ message: 'Product deleted successfully' }); // success message
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}