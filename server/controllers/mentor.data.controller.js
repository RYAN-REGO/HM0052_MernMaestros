import Mentor from '../model/mentor.model.js';
const getMentorProfileData = async (req, res) => {
    const {email} = req.body;
    try {
        const mentor = await Mentor.findOne({email});
        if (!mentor) {
        return res.status(400).json({
            msg: 'Mentor not found'
        });
        }
        res.json(mentor);
    } catch (error) {
        return res.status(500).json({
        msg: 'Server error'
        });
    }
}

export {getMentorProfileData};