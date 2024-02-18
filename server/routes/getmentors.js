import express from 'express';
import {getAllMentorsProfile} from '../controllers/mentor.getAll.js';
const router = express.Router();

router.get('/getAll',getAllMentorsProfile);

export default router;