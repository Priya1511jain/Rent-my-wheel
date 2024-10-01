// owner.route.js
import { Router } from "express";
import {registerOwner, loginOwner, logoutOwner,refreshAccessToken,getCurrentOwner} from "../controllers/owner.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifiyJWT } from "../middlewares/auth.middleware.js";

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

router.route("/loginOwner").post(loginOwner)
router.route("/logout").post(verifiyJWT,logoutOwner)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/ownerProfile").get(getCurrentOwner)


export default router;
