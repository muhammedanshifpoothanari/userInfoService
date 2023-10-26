import mongoose, { Model } from 'mongoose';

// Define the user schema type (assuming it matches your schema)
interface UserSchema {
    mobileNumber: Number,
    email: String,
    adhaar: Number,
    userType: String,
    panchayath: String,
    city: String,
    postalCode: String,
    district: String,
    state: String,
    country: String,
    about: String,
    isBlocked: Boolean,
    isVerified: Boolean,
    CreatedAt: Date
}

// Create a Mongoose model for the user
const getUserModel = (): Model<UserSchema> => {
    const entityName = 'userInfo';
    const { userInfoSchema } = require('../database/schema/userInfo.schema');
    console.log('jhdhkjdxcfjkcfv');
    if (!userInfoSchema)
        throw new Error('User schema not found!');
    
    return mongoose.model<UserSchema>(entityName, userInfoSchema);
};
module.exports = {
    getUserModel
}