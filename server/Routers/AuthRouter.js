import express from "express";
import { Auth } from "../Models/AuthModel.js";
import bcrypt from 'bcryptjs'
import {check, validationResult} from 'express-validator'

export const AuthRouter = express.Router();

AuthRouter.post('/registration', 
    [
        check('email', 'Uncorrect email').isEmail(),
        check('password', 'Password must be longer than 3 and shorter than 12').isLength({min: 3, max: 12})
    ], 
    async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({message: "Uncorrect request", errors})
        } 

        const {email, name, nickname, password} = req.body
        const candidate = await Auth.findOne({email})

        if (candidate) {
            return res.status(400).json({message: "User is already exist"})
        }
        const hashPassword = await bcrypt.hash(password, 15)

        const user = new Auth({email, password: hashPassword, name: name, nickname: nickname})
        await user.save()
        return res.json({message: "User was created"})
    } catch(err) {
        console.log(err)
        res.send({message: "Server error"})
    }
})

AuthRouter.post('/login', 
    [
        check('email', 'Uncorrect email').isEmail(),
        check('password', 'Password must be longer than 3 and shorter than 12').isLength({min: 3, max: 12})
    ], 
    async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({message: "Uncorrect request", errors})
        } 

        const {email, password} = req.body
        const candidate = await Auth.findOne({email})

        if (!candidate) {
            return res.status(400).json({message: "User doesn't exist"})
        }
        
        const isPassEqual = await bcrypt.compare(password, candidate.password)
        if (!isPassEqual) {
            return res.status(400).json({message: "Incorrect password"})
        }

        return res.json({user: candidate})
    } catch(err) {
        console.log(err)
        res.send({message: "Server error"})
    }
})