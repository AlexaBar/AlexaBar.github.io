import express from "express"
import { addToy, listToy, removeToy } from "../controllers/toyController.js";
import multer from "multer";

const toyRouter = express.Router();//using this we create GET methode,PUSH...

//Image Storage Engine
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`) //our filename will be unique

    }
})
const upload = multer({storage:storage})

toyRouter.post("/add",upload.single("image"),addToy)
toyRouter.get("/list",listToy);
toyRouter.post("/remove",removeToy);


export default toyRouter;