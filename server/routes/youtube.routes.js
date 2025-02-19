import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { youtubeController,getAllYoutube } from "../controllers/youtube.controller.js";
const router = Router();

router.post("/create",authMiddleware,youtubeController)
router.get("/all",authMiddleware,getAllYoutube)


export default router;