import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";

export async function userRegister(req, res) {
    try {
        let {fullName, email, password} = req.body;
        if(await userModel.findOne({email: email})) {
            return res.status(409).send("email is already registered");
        }
        let hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = await userModel.create({fullName, email, hashedPassword});
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}
