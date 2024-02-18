import Mentee from '../model/mentee.model.js';
import jwt from 'jsonwebtoken';

const editInfo = async (req, res) => {
    const {token,firstName,lastName,bio,needs} = req.body;
    if (!token || !firstName || !lastName || !bio || !needs) {
        return res.status(400).json({msg: 'All fields are required'});
    }
    try {
        console.log(" hi 1")
        jwt.verify(token, process.env.JWT_SECRET, {}, async (err, user) => {
            if (err) {
                return res.status(400).json({msg: 'Invalid token'});
            }
            console.log(" hi 1")
            const mentee = await Mentee.findById(user.id);
            if (!mentee) {
                return res.status(400).json({msg: 'Mentee not found'});
            }
            console.log(" hi 2")
            mentee.firstName = firstName;
            mentee.lastName = lastName;
            mentee.bio = bio;
            mentee.needs = needs;
            mentee.isFormFilled = true;
            console.log(" hi 1")
            await mentee.save();
            console.log(" hi 4")
            res.json({msg: 'Mentee info updated successfully'});
        });
    }catch (error) {
        return res.status(500).json({msg: 'Server error'});
    }
}

export {editInfo};