import jwt from 'jsonwebtoken';

export function verify(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "user not logged in" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ message: "invalid user" });
        }
        req.user = decoded._id; // Attach user id to req, not res
        next();
    } catch (err) {
        return res.status(401).json({ message: "invalid or expired token" });
    }
}