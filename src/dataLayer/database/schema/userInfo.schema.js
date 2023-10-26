"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserInfoSchema = new mongoose_1.Schema({
    firstName: String,
    lastName: String,
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
    isAdmin: Boolean,
    CreatedAt: { type: Date, default: Date.now },
    isUpdated: { type: Date, default: Date.now }
});
module.exports = {
    userInfoSchema: UserInfoSchema
};
