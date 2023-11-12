import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
 
export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll({
            attributes:['user_id','username','first_name','last_name']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}
 
export const Register = async(req, res) => {
    const { firstName, lastName, email, password, confPassword } = req.body;
    if(email === ""){
        res.status(400).json({msg: "Failed. Invalid query."});
        return;
    }
    const existing = await Users.findAll({attributes:['username'], where:{username: email}});
    await existing;
    if(existing.length===0){
        if(password !== confPassword){
            return res.status(400).json({msg: "Password and Confirm Password do not match"});
        } 
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);
        try {
            await Users.create({
                first_name: firstName,
                last_name: lastName,
                username: email,
                password_hash: hashPassword
            });
            res.status(200).json({msg: "Registration Successful"});
        } catch (error) {
            console.log(error);
        }
    }else{
        res.status(400).json({msg: "Failed. Email exists."});
    }
}
 
export const Login = async(req, res) => {

    try {
        const user = await Users.findAll({
            where:{
                username: req.body.email 
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password_hash);
        if(!match) return res.status(400).json({msg: "Wrong Password"});
        const userId = user[0].user_id;
        const firstName = user[0].first_name;
        const lastName = user[0].last_name;
        const email = user[0].username;
        const accessToken = jwt.sign({userId,firstName, lastName, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '15s'
        });
        const refreshToken = jwt.sign({userId, firstName, lastName, email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '10d'
        });
        await Users.update({refresh_token: refreshToken},{
            where:{
                user_id: userId
            }
        });
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken });
    } catch (error) {
        console.log(error)
        res.status(404).json({msg:"Email not found"});
    }
}
 
export const Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const user = await Users.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await Users.update({refresh_token: null},{
        where:{
            user_id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}
