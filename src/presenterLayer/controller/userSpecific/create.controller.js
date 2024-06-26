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
const { createAbs: wrappedFunctionForCreating, autheriseAbs: wrappedFunctionForAuthering } = require('../../../domainLayer/useCase/index');
const setCntrl = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(data.body, '!!!!!!!!!!!!');
        let users = null;
        const { userName, mobile, otp, requestType, } = data.body;
        const newData = {
            userName,
            mobile,
            otp,
            requestType
        };
        if (requestType === 'sendOtp') {
            users = yield wrappedFunctionForCreating(newData);
        }
        else {
            users = yield wrappedFunctionForAuthering(newData);
        }
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
