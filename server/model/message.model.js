import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    sender : {type : mongoose.Types.ObjectId, ref : "Mentee"},
    receiver : {type : mongoose.Types.ObjectId, ref : "Mentor"},
})

export default mongoose.model("Message", messageSchema);