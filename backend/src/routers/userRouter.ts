import express from "express";
import * as userController from "../controllers/userController";
import { isAdmin, isAuth } from "../utils";

const userRouter = express.Router();

userRouter.get("/:id", isAuth, isAdmin, userController.getUser);
userRouter.get("/:id/profile", isAuth, userController.getProfileInfo);

userRouter.post("/signin", userController.signin);
userRouter.post("/register", userController.register);

userRouter.patch("/profile", isAuth, userController.patchProfileInfo);

export default userRouter;
