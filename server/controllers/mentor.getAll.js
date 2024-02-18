import Mentor from '../model/mentor.model.js';

const getAllMentorsProfile = async (req, res) =>{
    try {
        const mentors = await Mentor.find();
        res.json(mentors);
    } catch (error) {
        return res.status(500).json({
            msg: 'Server error'
        });
    }
}

export {getAllMentorsProfile};