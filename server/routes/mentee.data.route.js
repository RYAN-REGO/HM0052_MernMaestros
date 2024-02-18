import express from 'express';
import {getMenteeProfileData} from '../controllers/mentee.data.controller.js';
const router = express.Router();

router.post('/get-mentee-profile-data',getMenteeProfileData)

export default router;