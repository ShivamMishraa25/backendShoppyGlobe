import cartModel from "../models/cart.model.js";

export async function addToCart(req, res) {
    try {
        const { userId } = req.params;
        const { productId } = req.body;

        // Check if the product is already in the user's cart
        const inCart = await cartModel.findOne({ userId, productId });
        if (!inCart) {
            await cartModel.create({ userId, productId, quantity: 1 });
            return res.status(200).json({ message: "product added to the cart" });
        }
        // If already in cart, increment quantity
        await cartModel.updateOne(
            { userId, productId },
            { $inc: { quantity: 1 } }
        );
        res.status(201).json({ message: "item quantity increased in the cart" });

    } catch (err) {
        res.status(500).json({ message: "error occurred" });
    }
}

export async function updateQuantity(req, res) {
    try {
        const { userId } = req.params;
        const { productId } = req.body;

        // Check if the product is present in the user's cart
        const inCart = await cartModel.findOne({ userId, productId });
        if (!inCart) {
            return res.status(404).json({ message: "product not found in cart" });
        }
        // If already in cart, increment quantity
        await cartModel.updateOne(
            { userId, productId },
            { $inc: { quantity: 1 } }
        );
        res.status(201).json({ message: "item quantity increased in the cart" });

    } catch (err) {
        res.status(500).json({ message: "error occurred" });
    }
}

export async function deleteCart(req, res) {
    try {
        const { userId } = req.params;
        const { productId } = req.body;

        // Check if the product is already in the user's cart
        const deleted = await cartModel.findOneAndDelete({ userId, productId });
        if (!deleted) {
            return res.status(404).json({ message: "product not found in cart" });
        }
    } catch (err) {
        res.status(500).json({ message: "error occurred" });
    }
}