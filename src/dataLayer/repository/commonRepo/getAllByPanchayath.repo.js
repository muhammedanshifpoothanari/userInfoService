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
const { getUserModel: modelToGetUserByPanchayath } = require('../getUserModel');
const getAllByPanchayath = (panchayath) => __awaiter(void 0, void 0, void 0, function* () {
    if (!panchayath)
        throw new Error('Panchayath was not properly passed to the repository!');
    const userModel = modelToGetUserByPanchayath();
    try {
        const usersArray = yield userModel.find({ panchayath: panchayath }).exec();
        if (!usersArray)
            return false;
        return usersArray;
    }
    catch (error) {
        throw new Error('Error in getting user from the database by user Panchayath!');
    }
});
module.exports = {
    getAllByPanchayath
};
