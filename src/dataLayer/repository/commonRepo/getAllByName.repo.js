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
const { getUserModel: modelToGetUserByName } = require('../getUserModel');
const getAllByName = (firstName, lastName) => __awaiter(void 0, void 0, void 0, function* () {
    const userModel = modelToGetUserByName();
    try {
        if (!firstName && !lastName) {
            console.log('name not provided properly');
        }
        const query = {
            firstName: firstName || null,
            lastName: lastName || null,
        };
        const usersArray = yield userModel.find(query).exec();
        if (usersArray.length === 0) {
            return false;
        }
        return usersArray;
    }
    catch (error) {
        console.log(error);
    }
});
module.exports = {
    getAllByName
};
