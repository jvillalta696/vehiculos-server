import { Router } from "express";
import {auth} from "../data/firebase.js";
import { userRouter } from "./user.router.js";

export const router = Router();

router.use('/user',userRouter);

router.get('/',(req,res)=>{res.json({message: "The server is Up"})});



router.get('/test-get',(req,res)=>{
    auth.getUserByEmail('user@example.com')
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
      res.status(200).json(userRecord)
    })
    .catch((error) => {
      console.log('Error fetching user data:', error);
      res.status(400).json({message: `Error creating new user: ${error.message}`})
    });
})
