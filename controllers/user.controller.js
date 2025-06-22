import userModel from "../models/user.model.js";

export async function userRegister(req, res) {
    try {
        const newUser = await userModel.create(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}
