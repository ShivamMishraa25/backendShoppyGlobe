import userModel from "../models/user.model.js"; // imoprt user model for implementing logic
import bcrypt from "bcrypt"; // import bcrypt library for hashing the passwords
import jwt from "jsonwebtoken"; // import jwt to send token when user is logged-in

// controller logic for user registration
export async function userRegister(req, res) {

    // try and catch blocks for cleaner code and error handling
    try {
        let {fullName, email, password} = req.body; // destructure req.body
        if(await userModel.findOne({email: email})) {
            return res.status(409).send("email is already registered"); // if email is already registered, send 409 status
        }

        // hash the password for security
        let hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = await userModel.create({ fullName, email, password: hashedPassword }); // add new user to db
        res.status(201).json(newUser); // send newUser in response
    } catch (err) {
        res.status(500).json({error: err.message}); // send error message, if any is caught
    }
}

// logic for logging-in user
export async function userLogin(req, res) {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email: email }); // find user by email
        if (!user) {
            return res.status(404).json({ message: "email not found" }); // send 404 if email is not found
        }

        // compare entered password with hashed password
        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) {
            return res.status(401).send("invalid password"); // if not matched, send password incorrect
        }
        const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "30d" }); // create a token with secretKey in dotenv
        console.log(user); // console user (optional, but its a good practice according to Samarth Vohra sir)

        // send jwt token with the response
        return res.status(200).json({ message: "user logged-in successfully!", token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}