// owner.route.js
import { Router } from "express";
import {registerOwner} from "../controllers/owner.controller.js";
import { upload } from "../middlewares/multer.middleware.js";


const router = Router();

router.route("/registerOwner").post(
    upload.fields([
        {
            name: "aadharCardPhoto",
            maxCount:1
        },
        {
            name: "profilePic",
            maxCount:1
        }
    ]),
    registerOwner
)

export default router;
