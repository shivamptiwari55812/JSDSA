import express from 'express';
import  {getScores,sendData}  from '../controller/ScoreController.js';

const router = express.Router();


router.get('/scores',getScores)
router.post("/sendData",sendData )
// router.post()
export default router;
