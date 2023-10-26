"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { getUserModel: modelToCreateUser } = require('../getUserModel');
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    if (!userData || !userData.email) {
        throw new Error('Email was not properly passed to the repository!');
    }
    const userModel = modelToCreateUser();
    try {
        // Create a new user document with the provided data, including the isAdmin field
        const newUser = new userModel(Object.assign(Object.assign({}, userData), { isBlocked: false, isVerified: false, isAdmin: false, isCreated: new Date(), isUpdated: new Date() }));
        // Save the new user to the database
        const doneTheJob = yield newUser.save();
        if (!doneTheJob)
            return false;
        // Return the newly created user
        return true;
    }
    catch (error) {
        throw new Error(`Error in creating the user in the database: ${error}`);
    }
});
module.exports = {
    createUser,
};
