// const bcrypt = require('bcryptjs');
import bcrypt from 'bcryptjs';
// const User = require('../model/user.model');
import Mentor from '../model/mentor.model.js';
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
        const mentor = await Mentor.findOne({email})
        if (mentor) {
            return res.status(400).json({msg: 'Mentor already exists'});
        }
        const hashedPassword = bcrypt.hashSync(password, 10);
        const newMentor = new Mentor({
            username,
            email,
            password: hashedPassword, 
        });

        await newMentor.save()
        res.json({msg: 'mentor added successfully'});
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
        const mentor = await Mentor.findOne({email});
        if (!mentor) {
            next(errorHandler(400, 'Invalid credentials'));
            return;
        }
        const validPassword = bcrypt.compareSync(password, mentor.password);
        if (!validPassword) {
            next(errorHandler(400, 'Invalid passord'));
            return;
        }

        const {password: pass, ...rest} = mentor._doc;
        console.log(rest);
        const token = jwt.sign({
            id:mentor._id.toString()
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '1d'
        })
        res.json({msg: 'Login successful', token:token, mentor:rest});
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
        const mentor = await Mentor.findOne({email});
        if(mentor){
            const token = jwt.sign({id:mentor._id},process.env.JWT_SECRET,{expiresIn: '1d'})
            const {password, ...rest} = mentor._doc;
            res.json({msg: 'Login successful', token:token, mentor:rest});
        }
        else{
            const generatedPassword = email+1234;
            const hashedPassword = bcrypt.hashSync(generatedPassword, 10);
            const name = username.toLowerCase().split(' ').join('')
            const newMentor = new Mentor({
                username: name,
                email,
                password: hashedPassword,
                profilePicture: googlePhotoUrl,
            });
            newMentor.save()
            const token = jwt.sign({id:newMentor._id.toString()},process.env.JWT_SECRET,{expiresIn: '1d'})
            const {password, ...rest} = newMentor._doc;
            res.json({msg: 'Mentor added successfully', token:token, mentor:rest});
        }
    }catch(error){
        next(errorHandler(500, 'Internal server error'));
        return;
    }
}

export{ signup, login, google};