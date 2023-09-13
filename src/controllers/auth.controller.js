import { JWT_SECRET } from '../config.js';
import User from '../models/user.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
    const {email, password} = req.body;
    try {

        const user = await User.findOne({email})

        if(!user){
            return res.status(404).json({message: 'User not found'})
        }

        const passwordIsValid = await bcrypt.compare(password, user.password)

        if(!passwordIsValid){
            return res.status(404).json({message: 'Invalid password'})
        }

        const token = jwt.sign({email: email},
            JWT_SECRET,
            { expiresIn: '12h' })

        res.status(200).json({
            token
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const registerAuth = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userFind = await User.findOne({email})

        if (userFind) return res.status(400).json({error: "Email already exists"})

        const hashPass = await bcrypt.hash(password, 10);

        const userCreated = new User({
            email: email,
            password: hashPass,
        });

        await userCreated.save();

        const token = jwt.sign({email: email},
            JWT_SECRET,
        { expiresIn: '12h' })

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({error: error});
    }
}
