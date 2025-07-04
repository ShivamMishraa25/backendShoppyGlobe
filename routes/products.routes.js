import { addProducts, deleteProduct, fetchProducts, singleProduct, updateProduct } from "../controllers/products.controller.js"; // import all controller logic funcitons

// export product routes to call in sever.js, with defined paths/routes and controller logic
export function productRoutes(app) {
    app.get("/products", fetchProducts); // fetch all products from database
    app.get("/products/:id", singleProduct); // fetch a single product by it's id

    app.post("/product", addProducts); // to add new product
    app.put("/product/:id", updateProduct); // to update a product
    app.delete("/product/:id", deleteProduct); // to delete a product
}