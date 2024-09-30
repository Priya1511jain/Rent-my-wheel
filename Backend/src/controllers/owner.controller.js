// owner.controller.js
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asynchandler.js";
import { Owner } from "../models/Owner.model.js";
import { ApiResponse } from "../utils/Apiresponse.js";
import router from "../routes/owner.route.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";



export const registerOwner = asyncHandler(async (req, res) => {
    const { fullname, email, password, contactNo, address } = req.body

    // Check if all required fields are filled
    if ([fullname, email, password, contactNo, address].some((field) => 
        field?.trim() === "")
) {
        throw new ApiError(400, "All fields are required");
    }

    // Check if owner already exists by email or contact number
    const existedOwner = await Owner.findOne({ $or: [{ contactNo }, { email }] });
    if (existedOwner) {
        throw new ApiError(409, "Owner with email or contact number already exists");
    }

    const aadharcardLocalPath = req.files?.aadharCardPhoto[0]?.path;
    console.log("path is :",aadharcardLocalPath )

    if(!aadharcardLocalPath){
        throw new ApiError(400,"aadharcard is required")
    }

    let profilePhotoPath;
    if(req.files && Array.isArray(req.files.
        profilePic) && req.files.profilePic.length > 0
    ){profilePhotoPath = req.files.profilePic[0].path}


    //upload on cloudinary,aadharcard
    const aadharcard = await uploadOnCloudinary(aadharcardLocalPath);
    console.log("url", aadharcard)
    
    const ProfilePhoto = await uploadOnCloudinary(profilePhotoPath);

    if(!aadharcard){
        throw new ApiError(400,"not uploaded on cloudinary")
    }

    
    // Create the new owner
    const newUser = await Owner.create({
        fullname,
        email,
        password,  // Assuming password is hashed
        contactNo,
        address,
        aadharCardPhoto: aadharcard.url,
        profilePic : ProfilePhoto?.url || "",

    });

    // Return success response
    res.status(201).json({ message: "Owner registered successfully", newUser });
});
