import Mentor from '../model/mentor.model.js';
import jwt from 'jsonwebtoken';

const editInfo = async (req, res) => {
    console.log("hi 0")
    const {token,firstName,lastName,currentlyWorkingAt,proficiency,bio,rateOfMentorship} = req.body;
    if(!token || !firstName || !lastName || !currentlyWorkingAt || !proficiency || !bio || !rateOfMentorship){
        return res.status(400).json({msg: 'Please fill all the fields'});
    }
    try {
        console.log(" hi 1")
        jwt.verify(token, process.env.JWT_SECRET, {}, async (err, user) => {
            if (err) {
                return res.status(400).json({msg: 'Invalid token'});
            }

            console.log(" hi 1")
            const mentor = await Mentor.findById(user.id);
            if (!mentor) {
                return res.status(400).json({msg: 'Mentor not found'});
            }
            console.log(" hi 2")
            mentor.firstName = firstName;
            mentor.lastName = lastName;
            mentor.currentlyWorkingAt = currentlyWorkingAt;
            mentor.bio = bio;
            mentor.proficiency = proficiency;
            mentor.rateOfMentorship = rateOfMentorship; 
            mentor.isFormFilled = true;
            console.log(" hi 1")
            await mentor.save();
            console.log(" hi 4")
            res.json({msg: 'Mentor info updated successfully'});
        });
    }catch (error) {
        return res.status(500).json({msg: 'Server error'});
    }
}

export {editInfo};