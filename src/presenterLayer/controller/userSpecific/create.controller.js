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
const { createAbs: wrappedFunctionForCreating } = require('../../../domainLayer/useCase/index');
const setCntrl = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, mobileNumber, email, adhaar, userType, postalCode, panchayath, city, district, state, country, about, } = data;
        const newData = {
            firstName,
            lastName,
            mobileNumber,
            email,
            adhaar,
            userType,
            postalCode,
            panchayath,
            city,
            district,
            state,
            country,
            about,
        };
        const users = yield wrappedFunctionForCreating(newData);
        if (users)
            return users;
        return false;
    }
    catch (error) {
        console.log(error);
    }
});
module.exports = {
    setCntrl
};
