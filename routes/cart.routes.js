import { addToCart, deleteCart, updateQuantity } from "../controllers/cart.controller.js"; // import all controllers
// import verify middleware for authentication, so that only logged in user can access cart routes
import { verify } from "../middleware/authMiddleware.js";

// export cart routes with authentication middleware
export function cartRoutes(app) {
    app.post("/cart/:userId", verify, addToCart); // we are passing userId in dynamic routing because rubrics aren't clear about it.
    app.put("/cart/:userId", verify, updateQuantity);
    app.delete("/cart/:userId", verify, deleteCart);
}