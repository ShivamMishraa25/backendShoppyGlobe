import jwt from 'jsonwebtoken'; // import jwt

// define verify middleware to authenticate the user
export function verify(req, res, next) { // export it to call it in cart routes
    const token = req.headers.authorization?.split(" ")[1]; // take out token from headers
    if (!token) {
        return res.status(401).json({ message: "user not logged in" }); // if token not found, send appropriate response
    }

    // try catch blocks for cleaner code
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // decode the jwt token with dotenv secretKey
        if (!decoded) {
            return res.status(401).json({ message: "invalid user" }); // if not decoded correctly, send invalid user message
        }
        req.user = decoded._id; // Attach user id to req
        next(); // send request to the next middleware or route (route in our case)
    } catch (err) {
        return res.status(401).json({ message: "invalid or expired token" }); // if any errors are caught
    }
}