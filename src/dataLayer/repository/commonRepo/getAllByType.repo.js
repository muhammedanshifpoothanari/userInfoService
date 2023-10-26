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
const { getUserModel: modelToGetUserByType } = require('../getUserModel');
const getAllByType = (type) => __awaiter(void 0, void 0, void 0, function* () {
    if (!type)
        throw new Error('Type was not properly passed to the repository!');
    const userModel = modelToGetUserByType();
    try {
        const usersArray = yield userModel.find({ userType: type }).exec();
        if (!usersArray)
            return false;
        return usersArray;
    }
    catch (error) {
        throw new Error('Error in getting user from the database by user type!');
    }
});
module.exports = {
    getAllByType
};
