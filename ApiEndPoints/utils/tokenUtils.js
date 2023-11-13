import jwt from 'jsonwebtoken';
import Users from "../models/UserModel.js";

export const generateTokens = async () => {
    try {
        const user = await Users.findAll({
            attributes: ['user_id', 'username', 'first_name', 'last_name']
        });

        if (user.length === 0) {
            throw new Error("User not found");
        }

        const accessTokenPayload = {
            userId: user[0].user_id,
            firstName: user[0].first_name,
            lastName: user[0].last_name,
            email: user[0].username,
        };

        const refreshTokenPayload = {
            userId: user[0].user_id,
        };

        const accessToken = jwt.sign(accessTokenPayload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' });
        const refreshToken = jwt.sign(refreshTokenPayload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '10d' });

        return { accessToken, refreshToken };
    } catch (error) {
        console.error("Error generating tokens:", error);
        throw error; 
    }
};
