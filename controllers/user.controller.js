import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";

export async function userRegister(req, res) {
    try {
        let {fullName, email, password} = req.body;
        password = bcrypt.hashSync(password, 10);
        const newUser = await userModel.create({fullName, email, password});
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}
