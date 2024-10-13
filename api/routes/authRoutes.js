import express from 'express';
import { signin, signup, google, signout  } from '../controllers/authController.js';

const router = express.Router();

router.post("/sign-up", signup);
router.post("/sign-in", signin);
router.post('/google', google);
router.get('/signout', signout)

export default router;