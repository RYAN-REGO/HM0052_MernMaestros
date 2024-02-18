import mongoose  from 'mongoose';
const Schema = mongoose.Schema;

const menteeSchema = new Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true
    },
    email: { 
        type: String, 
        required: true,
        unique: true
    },
    password: { 
        type: String, 
        required: true 
    },
    profilePicture: { 
        type: String, 
        default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png'
    },
    role: { 
        type: String, 
        default: 'mentee'
    },
    isFormFilled: {
        type: Boolean,
        default: false
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    bio: {
        type: String,
    },
    needs: {
        type: [String],
    },},
    {
        timestamps: true
    }
);

export default mongoose.model('Mentee', menteeSchema);