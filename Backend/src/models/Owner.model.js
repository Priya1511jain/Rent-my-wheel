import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt";

const ownerSchema = new Schema({
    fullname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase:true,
        trim: true
    },
    password:{
        type:String,
        required:[true,'Password is required']
    },
    // refreshToken:{

    // },
    contactNo:{
        type: String,
        required: true
    },
    aadharCardPhoto:{
        type: String,
        required: true
    },
    profilePic:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    vehicles:[{
        type: Schema.Types.ObjectId,
        ref: 'Vehicle'
    }],
},{timestamps: true});
//for encryption of password just before saving data   pre=(hooks or middleware)
ownerSchema.pre("save", async function(next) { 
    //ecryption takes time isliye async use krege aur next ko call kr dege ki aage ki procedure kro
{    if(!this.isModified("password")) return next();
}    
try {
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
      next();
  
} catch (error) {
  throw new ApiError(400, "Password is not hashed")
}})
//jo password user ne login krte samay dala usko jo bcrypt password se compare krege
ownerSchema.methods.isPasswordCorrect = async function(password){
try {
      return await bcrypt.compare(password, this.password)
  
} catch (error) {
  throw new ApiError(404,"issue in comparing")
  next(error);
}}



export const Owner = mongoose.model("Owner",ownerSchema)