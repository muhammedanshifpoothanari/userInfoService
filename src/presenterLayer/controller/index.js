"use strict";
const { getAllCntrl: getAllCntrlAbs } = require('./common/getAll.controller');
const { getAllByCityCntrl: getAllByCityCntrlAbs } = require('./common/getAllByCity.controller');
const { getAllByEmailCntrl: getAllByEmailCntrlAbs } = require('./common/getAllByEmail.controller');
const { getAllByCountryCntrl: getAllByCountryCntrlAbs } = require('./common/getAllByCountry.controller');
const { getAllByDistrictCntrl: getAllByDistrictCntrlAbs } = require('./common/getAllByDistrict.controller');
const { getAllByNameCntrl: getAllByNameCntrlAbs } = require('./common/getAllByName.controller');
const { getAllByPanchayathCntrl: getAllByPanchayathCntrlAbs } = require('./common/getAllByPanchayath.controller');
const { getAllByStateCntrl: getAllByStateCntrlAbs } = require('./common/getAllByStateUseCase.controller');
const { getAllByTypeCntrl: getAllByTypeCntrlAbs } = require('./common/getAllByType.controller');
const { getByIdCntrl: getByIdCntrlAbs } = require('./common/getById.controller');
const { isAdminCntrl: isAdminCntrlAbs } = require('./common/isAdmin.controller');
const { blockByIdCntrl: blockByIdCntrlAbs } = require('./adminSpecific/blockById.controller');
const { setByEmailCntrl: setByEmailCntrlAbs } = require('./adminSpecific/setAdminByEmail.controller');
const { unBlockByIdCntrl: unBlockByIdCntrlAbs } = require('./adminSpecific/unBlockById.controller');
const { unVerifyByIdCntrl: unVerifyByIdCntrlAbs } = require('./adminSpecific/unVerifyById.controller');
const { verifyByIdCntrl: verifyByIdCntrlAbs } = require('./adminSpecific/verifyById.controller');
const { setCntrl: setCntrlAbs } = require('./userSpecific/create.controller');
const { updateCntrl: updateCntrlAbs } = require('./userSpecific/update.controller');
module.exports = {
    getAllCntrlAbs,
    getAllByCityCntrlAbs,
    getAllByEmailCntrlAbs,
    getAllByCountryCntrlAbs,
    getAllByDistrictCntrlAbs,
    getAllByNameCntrlAbs,
    getAllByPanchayathCntrlAbs,
    getAllByStateCntrlAbs,
    getAllByTypeCntrlAbs,
    getByIdCntrlAbs,
    isAdminCntrlAbs,
    blockByIdCntrlAbs,
    setByEmailCntrlAbs,
    unBlockByIdCntrlAbs,
    unVerifyByIdCntrlAbs,
    verifyByIdCntrlAbs,
    setCntrlAbs,
    updateCntrlAbs
};
