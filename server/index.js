import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import mentorAuth from "./routes/mentor.auth.route.js"; 
import menteeAuth from "./routes/mentee.auth.route.js";
import menteeProfileEdit from "./routes/mentee.Info.route.js";
import mentorProfileEdit from "./routes/mentor.info.route.js";
import getMenteeProfileData from "./routes/mentee.data.route.js";
import getMentorProfileData from "./routes/mentor.data.route.js";
import getAllMentorsProfile from "./routes/getmentors.js";

const app = express();
app.use(cors());    
app.use(express.json());
dotenv.config();

const PORT = 5000;

mongoose.connect(process.env.MONGO_KEY).then(() => {
    console.log('Connected to database');
}).catch(() => {
    console.log('Connection failed');
}
);

app.use('/api/auth/mentor', mentorAuth);
app.use('/api/auth/mentee', menteeAuth);

app.use('/api/profile/mentee',menteeProfileEdit);
app.use('/api/profile/mentor',mentorProfileEdit);

app.use('/api/data/mentee',getMenteeProfileData);
app.use('/api/data/mentor',getMentorProfileData);

app.use('/api/getallmentors',getAllMentorsProfile);

app.listen(PORT, () => {
    console.log(`Server listening on port : ${PORT}`);
})