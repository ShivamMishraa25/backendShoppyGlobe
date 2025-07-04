import jwt from 'jsonwebtoken'; // import jwt

// define verify middleware to authenticate the user
export function verify(req, res, next) { // export it to call it in cart routes

    // check if token is present
    const authHeader = req.headers.authorization;

    // if token not found, send appropriate response
    if (!authHeader || !authHeader.startsWith('JWT ')) {
      return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    const token = req.headers.authorization?.split(" ")[1]; // take out token from headers

    // try catch blocks for cleaner code
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // decode the jwt token with dotenv secretKey

        // if not decoded correctly, send invalid user message
        if (!decoded) {
            return res.status(401).json({ message: "invalid user" }); 
        }

        req.user = decoded._id; // Attach user id to req
        next(); // send request to the next middleware or route (route in our case)
    } catch (err) {
        console.error('Token verification failed:', err.message);
        return res.status(401).json({ message: "invalid or expired token" }); // if any errors are caught
    }
}