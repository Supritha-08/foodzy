const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    let token = req.headers["authorization"];

    if (token) {
        token = token.split(" ")[1]; // Remove 'Bearer' if present

        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(400).json({ message: "Invalid token" });
            } else {
                req.user = decoded; // Attach decoded payload to req
                next(); // Proceed to next middleware/route
            }
        });
    } else {
        return res.status(400).json({ message: "No token provided" });
    }
};

module.exports = verifyToken;
