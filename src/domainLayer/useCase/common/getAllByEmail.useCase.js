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
const { getAllByEmailAbs: getAllByEmailUseCase } = require('../../../dataLayer/repository/index'); // Import your dependency
const createWrapperToGetAllByEmail = require('../utility');
const getAllByEmailExecute = (dependency, email) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('verifyUserByIdAbsUseCase:');
    console.log('dependency:', dependency);
    const userData = yield dependency(email);
    if (userData === null) {
        return false;
    }
    return userData;
});
module.exports = createWrapperToGetAllByEmail(getAllByEmailUseCase, getAllByEmailExecute);
