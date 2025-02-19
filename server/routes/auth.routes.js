import {Router} from "express";
import auth from "../middleware/auth.middleware.js";
import {login,register,logout} from "../controllers/auth.controller.js";
const router = Router()

router.post('/login',login);
router.post('/register',register);
router.post('/logout',logout);

export default router;