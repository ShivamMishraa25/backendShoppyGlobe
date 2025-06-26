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

export async function userLogin(req, res) {
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({email: email});
        if (!user) {
            return res.status(404).json({message: "email not found"});
        }
        const unhashedPassword = bcrypt.compareSync(password, hash);
        if (!await bcrypt.compare(unhashedPassword, user.password)) {
            return res.status(401).send("invalid password");
        }
        return res.send(200).json(user);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}