import { asyncHandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import {Vehicle} from "../models/Vehicle.model.js";
import { ApiResponse } from "../utils/Apiresponse.js";


// Create a new vehicle
const createVehicle = asyncHandler(async (req, res) => {
    const { vehicleType, features, ageOfVehicle, pricePerHour, owner } = req.body
    
    // Validate required fields
    if ([vehicleType, features, ageOfVehicle, pricePerHour, owner].some((field) => 
        field?.trim()==="")) {
        throw new ApiError(400, "All fields are required");
    }

    // Handle file uploads (vehiclePhoto and licenseDocument)
    const vehiclePhotoLocalPath = req.files?.vehiclePhoto[0]?.path;
    const licenseDocLocalPath = req.files?.licenseDocument[0]?.path;

    if (!vehiclePhotoLocalPath || !licenseDocLocalPath) {
        throw new ApiError(400, "Vehicle photo and license document are required");
    }

    // Upload the files to Cloudinary
    const vehiclePhoto = await uploadOnCloudinary(vehiclePhotoLocalPath);
    const licenseDocument = await uploadOnCloudinary(licenseDocLocalPath);

    if (!vehiclePhoto || !licenseDocument) {
        throw new ApiError(500, "Failed to upload vehicle photo or license document");
    }

    // Create and save the new vehicle
    const newVehicle = await Vehicle.create({
        vehicleType,
        features,
        ageOfVehicle,
        pricePerHour,
        vehiclePhoto: vehiclePhoto.url,
        licenseDocument: licenseDocument.url,
        owner,
    });

    // Return success response
    res.status(201).json({ message: "Vehicle created successfully", newVehicle });
});

// Get all vehicles
const getAllVehicles = asyncHandler(async (req, res) => {
    const vehicles = await Vehicle.find().populate('owner', 'fullname email');
    res.status(200).json({ message: "Vehicles fetched successfully", vehicles });
});

// Get a single vehicle by ID
const getVehicleById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const vehicle = await Vehicle.findById(id).populate('owner', 'fullname email');

    if (!vehicle) {
        throw new ApiError(404, "Vehicle not found");
    }

    res.status(200).json({ message: "Vehicle fetched successfully", vehicle });
});

// Update a vehicle
const updateVehicle = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { vehicleType, features, ageOfVehicle, pricePerHour, owner } = req.body;

    // Find the vehicle to update
    let vehicle = await Vehicle.findById(id);

    if (!vehicle) {
        throw new ApiError(404, "Vehicle not found");
    }

    // Update the fields
    vehicle.vehicleType = vehicleType || vehicle.vehicleType;
    vehicle.features = features || vehicle.features;
    vehicle.ageOfVehicle = ageOfVehicle || vehicle.ageOfVehicle;
    vehicle.pricePerHour = pricePerHour || vehicle.pricePerHour;
    vehicle.owner = owner || vehicle.owner;

    // Handle file uploads if provided
    if (req.files?.vehiclePhoto) {
        const vehiclePhotoLocalPath = req.files.vehiclePhoto[0]?.path;
        const vehiclePhoto = await uploadOnCloudinary(vehiclePhotoLocalPath);
        vehicle.vehiclePhoto = vehiclePhoto.url || vehicle.vehiclePhoto;
    }

    if (req.files?.licenseDocument) {
        const licenseDocLocalPath = req.files.licenseDocument[0]?.path;
        const licenseDocument = await uploadOnCloudinary(licenseDocLocalPath);
        vehicle.licenseDocument = licenseDocument.url || vehicle.licenseDocument;
    }

    // Save the updated vehicle
    const updatedVehicle = await vehicle.save();
    res.status(200).json({ message: "Vehicle updated successfully", vehicle: updatedVehicle });
});

// Delete a vehicle
const deleteVehicle = asyncHandler(async (req, res) => {
    const { id } = req.params;
    
    const vehicle = await Vehicle.findById(id);

    if (!vehicle) {
        throw new ApiError(404, "Vehicle not found");
    }

    await vehicle.remove();
    res.status(200).json({ message: "Vehicle deleted successfully" });
});

const searchVehiclesByCategory = asyncHandler(async (req, res) => {
    const { vehicleType, sortByPrice } = req.query;

    if (!vehicleType) {
        throw new ApiError(400, "vehicleType is required for searching");
    }

    // Determine sorting order for price
    let sortOrder = {};
    if (sortByPrice) {
        if (sortByPrice === "lowToHigh") {
            sortOrder.pricePerHour = 1; // Ascending order
        } else if (sortByPrice === "highToLow") {
            sortOrder.pricePerHour = -1; // Descending order
        }
    }

    // Find all vehicles that match the provided category and sort by price if requested
    const vehicles = await Vehicle.find({ vehicleType: vehicleType })
        .populate('owner', 'fullname email contactNo address')
        .sort(sortOrder); // Sort by price if applicable

    if (!vehicles.length) {
        throw new ApiError(404, `No vehicles found in the category: ${vehicleType}`);
    }

    // Return vehicles with owner details
    res.status(200).json({ message: `${vehicles.length} vehicles found`, vehicles });
});

export {
    createVehicle,
    getAllVehicles,
    getVehicleById,
    updateVehicle,
    deleteVehicle,
    searchVehiclesByCategory
}
