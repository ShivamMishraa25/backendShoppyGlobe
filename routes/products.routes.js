import { fetchProducts, singleProduct } from "../controllers/products.controller.js";

export function productRoutes(app) {
    app.get("/products", fetchProducts);
    app.get("/products/:id", singleProduct);
}