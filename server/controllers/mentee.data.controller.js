import Mentee from '../model/mentee.model.js';
const getMenteeProfileData = async (req, res) => {
    const {email} = req.body;
    try {
        const mentee = await Mentee.findOne({email});
        if (!mentee) {
        return res.status(400).json({
            msg: 'Mentee not found'
        });
        }
        res.json(mentee);
    } catch (error) {
        return res.status(500).json({
        msg: 'Server error'
        });
    }
}

export {getMenteeProfileData};