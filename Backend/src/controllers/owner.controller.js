// owner.controller.js
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asynchandler.js";
import { Owner } from "../models/Owner.model.js";
import { ApiResponse } from "../utils/Apiresponse.js";
// import router from "../routes/owner.route.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import jwt from "jsonwebtoken"



const generateAccessAndRefreshTokens =  async(OwnerId) => {
    try {
        const owner = await Owner.findById(OwnerId)
        const accessToken = owner.generateAccessToken()
        const refreshToken = owner.generateRefreshToken()

        owner.refreshToken = refreshToken
        await owner.save({validateBeforeSave: false})
        console.log("accesstoken is:", accessToken)
        console.log("refreshtoken is",refreshToken)
        return {accessToken, refreshToken}

    } catch (error) {

        throw new ApiError(500," something went wrong while accessing token")
    }
}



const registerOwner = asyncHandler(async (req, res) => {
    const { fullname, email, password, contactNo, address } = req.body

    // Check if all required fields are filled
    if ([fullname, email,  password, contactNo, address].some((field) => 
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
    const owner = await Owner.create({
        fullname,
        email,
        password,  // Assuming password is hashed
        contactNo,
        address,
        aadharCardPhoto: aadharcard.url,
        profilePic : ProfilePhoto?.url || "",

    });

    const createdOwner = await Owner.findById(owner._id).select(
        "password -refreshToken" //jo return nahi krna
    )

    //check if owner created or not in db
    if(!createdOwner){
        throw new ApiError(500, "Something went wrong while registering owner")
    }


    // Return success response
    res.status(201).json(
        new ApiResponse(200, createdOwner, "owner registered succesfully")
    );
});

// const getProfile = asyncHandler(async (req,res) =>{
//     const {fullname,contactNo,email,address} = req.body

// } )


const loginOwner = asyncHandler(async (req, res)=>{
    // req.body ->data
    // get email id and username 
    // find the user
    // password check
    // pass access and refresh token 
    // send in the form of cookies

    const {email, contactNo, password} = req.body

    
    if(!contactNo && !email){
        throw new ApiError(400, "contactNo or email is required")
    }
    

    const owner = await Owner.findOne({
        $or: [{contactNo}, {email}]
    })

    if(!owner){
        throw new ApiError(404, "owner does not exit")
    }
    
    
    const isPasswordValid = await user.isPasswordCorrect(password)
    console.log(isPasswordValid);
    if(!isPasswordValid){
        throw new ApiError(401, "Invalid password is typed")
    }

    const {accessToken , refreshToken} = await generateAccessAndRefreshTokens(owner._id)

    const loggedinOwner = await Owner.findById(owner._id).
    select("-password -refresh")

    const options = {
        httpOnly: true,
        secure: true
    }
    
    return res
    .status(200)
    .cookie("accessToken", accessToken, options )
    .cookie("refreshToken", refreshToken,options)
    .json(
        new ApiResponse(200,
            {
                user: loggedinOwner, accessToken,
                refreshToken
            },
            "user logged in successfully"
        )
        
    )
})

const logoutOwner = asyncHandler(async(req, res) => {
    await Owner.findByIdAndUpdate(
        req.owner._id,
        {
            $unset:{
                refreshToken:1
            }
        },{
            new: true
        }
    )

    const options = {
        httponly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {},"Owner logged out successfully"))
})

const refreshAccessToken = asyncHandler (async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if(!incomingRefreshToken){
        throw new ApiError(401, "unauthorized request")
    }

try {
        const decodedToken = jwt.verify(incomingRefreshToken, 
            process.env.REFRESH_TOKEN_SECRET)
    
        const owner = await Owner.findById(decodedToken?._id)
    
        if(!owner){
            throw new ApiError(401, "invalid refrsh token")
        }
    
        if(incomingRefreshToken != owner?.refreshToken){
            throw new ApiError(401, "used or expired refresh token")
        }
    
        const options = {
            httpOnly:true,
            secure:true
        }
    
        const {accessToken, newrefreshToken} = await generateAccessAndRefreshTokens(owner._id)
    
        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newrefreshToken, options)
        .json(
            new ApiResponse(
                200,
                {accessToken, newrefreshToken},
                "Access token refreshed successfully"
            )
        )
    
} catch (error) {
    throw new ApiError(401, error?.message || "invalid refresh Token")
}})

const changeCurrentPassword = asyncHandler(async (req, res) => {
    const {oldPassword, newPassword} =req.body

    const owner = await Owner.findById(req.user?._id)
    const isPasswordCorrect = await owner.isPasswordCorrect(oldPassword)

    if(!isPasswordCorrect){
        throw new ApiError(400, "Invalid old Password")
    }

    owner.password = newPassword
    owner.save({validateBeforeSave: false})

    return res
    .status(200)
    .json(
        new ApiResponse(200, {},"password successfully changed")
    )
})

const getCurrentOwner = asyncHandler(async(req,res) => {
    return res
    .status(200)
    .json(
        new ApiResponse(200, req.owner, "current user fetched successfully")
    )
})

const updateAccountDetails = asyncHandler(async(req, res) => {
    const {fullname, email} = req.body
    if(!fullname ||!email){
        throw new ApiError(400, "All fields are required")
    }
    const owner = await Owner.findByIdAndUpdate(
        req.owner?._id,
        {
            $set:{
                fullname,
                email: email, // write both also
                }
        },
        {new: true}
    ).select("-password")

    return res
    .status(200)
    .json(new ApiResponse(200, owner, "account details updated successfully"))
})

// const updateuseravatar = asyncHandler(async(req,res)=>{   //while updating files use multer ans verify user route for image accepting and for authorized user
//     const avatarLocalPath =req.file?.path

//     if(!avatarLocalPath){
//         throw new ApiError(400,"Avatar file is missing")
//     }

//     const avatar = await uploadOnCloudinary(avatarLocalPath)
//     if(!avatar){
//         throw new ApiError(400, "error while uploading the avatar")
//     }

//     const user = await User.findByIdAndUpdate(req.user?._id,
//         {
//             $set:{
//                 avatar :avatar.url
//             }
//         },
//         {new: true}
//     ).select("-password")

//     return res
//     .status(200)
//     .json(
//         new ApiResponse(200,user,"avatar updated succesfully")
// )
// })

const updateProfilePhoto = asyncHandler(async(req,res)=>{   //while updating files use multer ans verify user route for image accepting and for authorized user
    const profilePhotoLocalPath =req.file?.path

    if(!profilePhotoLocalPath){
        throw new ApiError(400,"photo file is missing")
    }

    const profilePhoto = await uploadOnCloudinary(profilePhotoLocalPath)
    if(!profilePhoto){
        throw new ApiError(400, "error while uploading the coverimage")
    }

    const owner = await Owner.findByIdAndUpdate(req.owner?._id,
        {
            $set:{
                profilePhoto :profilePhoto.url
            }
        },
        {new: true}
    ).select("-password")

    return res
    .status(200)
    .json(
        new ApiResponse(200,owner,"profile photo updated succesfully")
    )
})



export {
    registerOwner,
    loginOwner,
    updateProfilePhoto,
    updateAccountDetails,
    getCurrentOwner,
    changeCurrentPassword,
    refreshAccessToken,
    logoutOwner,
}