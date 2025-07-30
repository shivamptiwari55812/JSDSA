import express from 'express';
import  {getScores,sendData}  from '../controller/ScoreController.js';

const router = express.Router();


router.post('/scores',getScores)
router.get("/sendData",sendData )
// router.post()
export default router;
