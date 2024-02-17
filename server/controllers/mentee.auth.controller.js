// const bcrypt = require('bcryptjs');
import bcrypt from 'bcryptjs';
// const User = require('../model/user.model');
import Mentee from '../model/mentee.model.js';
// const { errorHandler } = require('../utils/error');
import { errorHandler } from '../utils/error.js';
// const jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken';
// const nodemailer = require('nodemailer');

const signup = async (req, res,next) => {
    const {username, email, password} = req.body;
    console.log(req.body);
    if (!username || !email || !password) {
        next(errorHandler(400, 'All fields are required'));
        return;
    }
    try {
        const mentee = await Mentee.findOne({email})
        if (mentee) {
            return res.status(400).json({msg: 'Mentee already exists'});
        }
        const hashedPassword = bcrypt.hashSync(password, 10);
        const newMentee = new Mentee({
            username,
            email,
            password: hashedPassword, 
        });

        await newMentee.save()
        res.json({msg: 'mentee added successfully'});
    } catch (error) {
        next(error);
        return;
    }
}


const login = async (req, res, next) => {
    const {email, password} = req.body;
    if (!email || !password) {
        next(errorHandler(400, 'All fields are required'));
    }
    try {
        const mentee = await Mentee.findOne({email});
        if (!mentee) {
            next(errorHandler(400, 'Invalid credentials'));
            return;
        }
        const validPassword = bcrypt.compareSync(password, mentee.password);
        if (!validPassword) {
            next(errorHandler(400, 'Invalid passord'));
            return;
        }

        const {password: pass, ...rest} = mentee._doc;
        console.log(rest);
        const token = jwt.sign({
            id:mentee._id.toString()
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '1d'
        })
        res.json({msg: 'Login successful', token:token, mentee:rest});
    }
    catch (error) {
        next(errorHandler(500, 'Internal server error'));
        return;
    }
}

const google = async (req,res,next) => {
    const {username, email, googlePhotoUrl} = req.body;
    try{
        if(username==="" || email==="" || googlePhotoUrl===""){
            next(errorHandler(400, 'All fields are required'));
            return;
        }
        const mentee = await Mentee.findOne({email});
        if(mentee){
            const token = jwt.sign({id:mentee._id},process.env.JWT_SECRET,{expiresIn: '1d'})
            const {password, ...rest} = mentee._doc;
            res.json({msg: 'Login successful', token:token, mentee:rest});
        }
        else{
            const generatedPassword = email+1234;
            const hashedPassword = bcrypt.hashSync(generatedPassword, 10);
            const name = username.toLowerCase().split(' ').join('')
            const newMentee = new Mentee({
                username: name,
                email,
                password: hashedPassword,
                profilePicture: googlePhotoUrl
            });
            newMentee.save()
            const token = jwt.sign({id:newMentee._id.toString()},process.env.JWT_SECRET,{expiresIn: '1d'})
            const {password, ...rest} = newMentee._doc;
            res.json({msg: 'Mentee added successfully', token:token, mentee:rest});
        }
    }catch(error){
        next(errorHandler(500, 'Internal server error'));
        return;
    }
}

export{ signup, login, google};