import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// Create a schema for the Vehicle
const vehicleSchema = new Schema({
    vehicleType: { 
        type: String,
        required: true 
    },
    features: {
        type: String, 
        required: true 
    },
    ageOfVehicle: { 
        type: Number, 
        required: true 
    },
    vehiclePhoto: { 
        type: String, 
        required: true 
    }, // URL or path to the vehicle photo
    pricePerHour: { 
        type: Number, 
        required: true 
    },
    licenseDocument: { 
        type: String, 
        required: true 
    }, // URL or path to license document
    owner: { 
        type: Schema.Types.ObjectId, 
        ref: 'Owner', 
        required: true 
    }, // Reference to the owner
}, { timestamps: true });

const Vehicle = model('Vehicle', vehicleSchema);

export default Vehicle;
