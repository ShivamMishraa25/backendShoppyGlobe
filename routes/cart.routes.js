import { addToCart, deleteCart, updateQuantity } from "../controllers/cart.controller.js";
import { verify } from "../middleware/authMiddleware.js";

export function cartRoutes(app) {
    app.post("/cart/:userId", verify, addToCart);
    app.put("/cart/:userId", verify, updateQuantity);
    app.delete("/cart/:userId", verify, deleteCart);
}