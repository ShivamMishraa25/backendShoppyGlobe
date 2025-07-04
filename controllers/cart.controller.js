import cartModel from "../models/cart.model.js"; // import the cart model

// we will be using dynamic routing for user's id and req.body for product's id
// since that is how my front end has been made with graceful marks.

// controller logic to add product to cart
export async function addToCart(req, res) {
    // using try and catch blocks for cleaner code and error handling
    try {
        const { userId } = req.params; // fetch user's id from dynamic routing
        const { productId } = req.body; // take out product id from request's body to add in the cart

        // Check if the product is already in the user's cart
        const inCart = await cartModel.findOne({ userId, productId });
        if (!inCart) {
            await cartModel.create({ userId, productId, quantity: 1 }); // if not in cart, add 1 quantity of it
            return res.status(200).json({ message: "product added to the cart" }); // return success message
        }
        // If already in cart, increment quantity
        await cartModel.updateOne(
            { userId, productId },
            { $inc: { quantity: 1 } } // update the quantity to 1 more
        );
        res.status(201).json({ message: "item quantity increased in the cart" }); // send success message

    // send error message, if any is caught
    } catch (err) {
        res.status(500).json({ message: "error occurred" });
    }
}

// controller logic for updating quantity of a particular product
export async function updateQuantity(req, res) {
    try {
        const { userId } = req.params;
        const { productId, increaseQuantity } = req.body; // take product id and amount by which we want the quantity to increase

        // Check if the product is present in the user's cart
        const inCart = await cartModel.findOne({ userId, productId });
        if (!inCart) {
            return res.status(404).json({ message: "product not found in cart" }); // if product is not found send 404
        }
        // If already in cart, increment quantity by 
        await cartModel.updateOne(
            { userId, productId },
            { $inc: { quantity: increaseQuantity } } // increase quantity by client's desired amount
        );
        res.status(201).json({ message: `item quantity increased by ${increaseQuantity} in the cart` }); // send success message

    } catch (err) {
        res.status(500).json({ message: "error occurred" });
    }
}

// controller logic deleting a particular product from cart
export async function deleteCart(req, res) {
    try {
        const { userId } = req.params;
        const { productId } = req.body;

        // Check if the product is in the user's cart
        const deleted = await cartModel.findOneAndDelete({ userId, productId }); // delete if found in cart
        if (!deleted) {
            return res.status(404).json({ message: "product not found in cart" }); // send 404 if not found
        }
        return res.status(200).json({message: "item deleted from the Cart."}); // send success if deleted
    } catch (err) {
        res.status(500).json({ message: "error occurred" });
    }
}

export async function fetchCart(req, res) {
    try {
        const { userId } = req.params;

        // fetch all products from the cart with userId
        const cart = await cartModel.find({userId});
        if (!cart) {
            return res.status(404).json({ message: "cart is empty" }); // send 404 if not found
        }
        return res.status(200).json(cart); // send cart products
    } catch (err) {
        res.status(500).json({ message: "error occurred" });
    }
}