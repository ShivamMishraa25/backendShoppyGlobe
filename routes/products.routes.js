import { fetchProducts, singleProduct } from "../controllers/products.controller.js"; // import all controller logic funcitons

// export product routes to call in sever.js, with defined paths/routes and controller logic
export function productRoutes(app) {
    app.get("/products", fetchProducts);
    app.get("/products/:id", singleProduct);
}