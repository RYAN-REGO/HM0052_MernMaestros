import express from 'express';
import {getMentorProfileData} from '../controllers/mentor.data.controller.js';
const router = express.Router();

router.post('/get-mentor-profile-data',getMentorProfileData)

export default router;