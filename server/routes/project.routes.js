import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { createProject,getAllProject } from "../controllers/project.controller.js";
const router = Router();

router.post("/create",authMiddleware,createProject)
router.get("/all",authMiddleware,getAllProject)

export default router;