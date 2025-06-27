import { addToCart, deleteCart, updateQuantity } from "../controllers/cart.controller.js";

export function cartRoutes(app) {
    app.post("/cart/:userId", addToCart);
    app.put("/cart/:userId", updateQuantity);
    app.delete("/cart/:userId", deleteCart);
}