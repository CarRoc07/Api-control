import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config.js"

export const verifyToken = async (req, res, next) => {
    try {
        const accessToken = req.headers.authorization?.split(' ')[1];

        if(!accessToken) return res.status(401).json({error: "Unauthorized: Token not provided"})

        const decodedToken = jwt.decode(accessToken);

        if (decodedToken && typeof decodedToken === 'object' && decodedToken.exp && decodedToken.exp < Date.now() / 1000) {
            return res.status(401).json({ error: "Unauthorized: Token has expired" });
        }

        jwt.verify(accessToken, JWT_SECRET, async (err, user) => {
            if(err) return res.status(401).json({error: "ERROR VERIFY TOKEN"})
            if(!user) return res.status(401).json({error: "Unauthorized: Token not valid"})
            next()
        })
    } catch (error) {
        res.status(500).json({error: error});
    }
}