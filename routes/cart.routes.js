import { addToCart, deleteCart, fetchCart, updateQuantity } from "../controllers/cart.controller.js"; // import all controllers
// import verify middleware for authentication, so that only logged in user can access cart routes
import { verify } from "../middleware/authMiddleware.js";

// export cart routes with authentication middleware
export function cartRoutes(app) {
    app.post("/cart/:userId", verify, addToCart); // we are passing userId in dynamic routing because rubrics aren't clear about it.
    app.put("/cart/:userId", verify, updateQuantity); // to update a product's quantity in cart
    app.delete("/cart/:userId", verify, deleteCart); // to remove a product from cart

    app.get("/cart", verify, fetchCart); // fetch all products from cart
}