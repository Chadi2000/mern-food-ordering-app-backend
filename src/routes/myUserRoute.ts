import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { JsonWebTokenError } from "jsonwebtoken";
import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();

router.get("/", jwtCheck, jwtParse, MyUserController.getCurrentUser);
router.post("/", jwtCheck, MyUserController.createCurrenUser);
router.put(
    "/",
    jwtCheck,
    jwtParse,
    validateMyUserRequest,
    MyUserController.updateCurrentUser
    );

export default router;