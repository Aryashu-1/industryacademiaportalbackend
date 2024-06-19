const jwt = require('jsonwebtoken');

async function authToken(req, res, next) {
    try {
        const token = req.cookies?.token || req.headers.authorization?.split(' ')[1]; // Get token from cookies or authorization header

        if (!token) {
            return res.status(401).json({
                message: "No User Logged In",
                success: false,
                error: true
            });
        }

        jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
            if (err) {
                if (err.name === 'TokenExpiredError') {
                    return res.status(401).json({
                        message: "Token expired",
                        success: false,
                        error: true
                    });
                }
                return res.status(401).json({
                    message: "Invalid token",
                    success: false,
                    error: true
                });
            }

            req.user = { userId: decoded._id }; // Attach user ID to request object
            next(); // Proceed to the next middleware or route handler
        });

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            data: [],
            error: true,
            success: false
        });
    }
}

module.exports = authToken;
