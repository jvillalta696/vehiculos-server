import { Router } from "express";
import { create, deleteUsr, getAll, getByEmail } from "../controllers/auth.controller.js";

export const userRouter = Router();

userRouter.post('/',create);
userRouter.get('/:email',getByEmail);
userRouter.delete('/:uid',deleteUsr);
userRouter.get('/',getAll);