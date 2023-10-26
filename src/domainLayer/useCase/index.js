"use strict";
const getAllUserAbs = require('./common/getAll.useCase');
const getAllByCityUserAbs = require('./common/getAllByCity.useCase');
const getAllByEmailUserAbs = require('./common/getAllByEmail.useCase');
const getAllByCountryUserAbs = require('./common/getAllByCountry.useCase');
const getAllByDistrictUserAbs = require('./common/getAllByDistrict.useCase');
const getAllByNameUserAbs = require('./common/getAllByName.useCase');
const getAllByPanchayathUserAbs = require('./common/getAllByPanchayath.useCase');
const getAllByStateUseCaseAbs = require('./common/getAllByState.useCase');
const getAllByTypeUserAbs = require('./common/getAllByType.useCase');
const getAllByIdUserAbs = require('./common/getById.useCase');
const isAdminUserAbs = require('./common/isAdmin.useCase');
const blockByIdUserAbs = require('./adminSpecificUseCase/blockUserById.useCase');
const unBlockByIdUserAbs = require('./adminSpecificUseCase/unBlockUserById.useCase');
const unVerifyByIdUserAbs = require('./adminSpecificUseCase/unVerifyUserById.useCase');
const verifyByIdUserAbs = require('./adminSpecificUseCase/verifyUserById.useCase');
const setAdminByEmailUserAbs = require('./adminSpecificUseCase/setAdminUserByEmail.useCase');
const createAbs = require('./userSpecificUseCase/createUser.useCase');
const updateAbs = require('./userSpecificUseCase/updateUser.useCase');
module.exports = {
    getAllUserAbs,
    getAllByCityUserAbs,
    getAllByEmailUserAbs,
    getAllByCountryUserAbs,
    getAllByDistrictUserAbs,
    getAllByNameUserAbs,
    getAllByPanchayathUserAbs,
    getAllByStateUseCaseAbs,
    getAllByTypeUserAbs,
    getAllByIdUserAbs,
    isAdminUserAbs,
    blockByIdUserAbs,
    unBlockByIdUserAbs,
    unVerifyByIdUserAbs,
    verifyByIdUserAbs,
    setAdminByEmailUserAbs,
    createAbs,
    updateAbs
};
