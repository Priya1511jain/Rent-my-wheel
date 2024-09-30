import { Router } from "express";
import { createVehicle, getAllVehicles,
    getVehicleById,
    updateVehicle,
    deleteVehicle,
    searchVehiclesByCategory
}
 from "../controllers/vehicle.controller.js";
import { upload } from "../middlewares/multer.middleware.js";


const router = Router();

router.route("/vehicles").post(
    upload.fields([
        {
            name: "vehiclePhoto",
            maxCount:1
        },
        {
            name: "licenseDocument",
            maxCount:1
        }
    ]),
    createVehicle);

router.route("/getAllVehicles").get(getAllVehicles);
router.route("/getVehicles").get(getVehicleById);
router.route("/updateVehicles").patch(updateVehicle);
router.route("/deleteVehicle").delete(deleteVehicle);
router.route("/AllVehicles").get(searchVehiclesByCategory);


export default router;