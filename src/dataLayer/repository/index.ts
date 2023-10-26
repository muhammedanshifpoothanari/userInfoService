const {getAll: getAllAbs } = require('./commonRepo/getAll.repo');
const {getAllByCity: getAllByCityAbs } = require('./commonRepo/getAllByCity.repo');
const {getAllByEmail: getAllByEmailAbs } = require('./commonRepo/getAllByEmail.repo');
const {getAllByCountry: getAllByCountryAbs } = require('./commonRepo/getAllByCountry.repo');
const {getAllByDistrict: getAllByDistrictAbs }= require('./commonRepo/getAllByDistrict.repo');
const {getAllByName: getAllByNameAbs }= require('./commonRepo/getAllByName.repo');
const {getAllByPanchayath: getAllByPanchayathAbs } = require('./commonRepo/getAllByPanchayath.repo');
const {getAllByState: getAllByStateAbs } = require('./commonRepo/getAllByState.repo');
const {getAllByType: getAllByTypeAbs } = require('./commonRepo/getAllByType.repo');
const {getById: getByIdAbs } = require('./commonRepo/getById.repo');
const {isAdmin: isAdminAbs } = require('./commonRepo/isAdmin.repo');

const {blockUserById: blockUserByIdAbs} = require('./adminSpecificRepo/block.repo');
const {unBlockUserById: unBlockUserByIdAbs } =require('./adminSpecificRepo/unBlock.repo');
const {unVerifyUserById: unVerifyUserByIdAbs } =require('./adminSpecificRepo/unVerify.repo');
const {verifyUserById: verifyUserByIdAbs } = require('./adminSpecificRepo/verify.repo');
const {setAdminUserByEmail: setAdminUserByEmailAbs } = require('./adminSpecificRepo/setAdmin.repo');

const {createUser: createUserAbs } = require('./userSpecificRepo/set.repo');
const {updateUser :updateUserAbs } =require('./userSpecificRepo/update.repo');



module.exports ={
    getAllAbs,
    getAllByCityAbs,
    getAllByEmailAbs,
    getAllByCountryAbs,
    getAllByDistrictAbs,
    getAllByNameAbs,
    getAllByPanchayathAbs,
    getAllByStateAbs,
    getAllByTypeAbs,
    getByIdAbs,
    isAdminAbs,
    blockUserByIdAbs,
    unBlockUserByIdAbs,
    unVerifyUserByIdAbs,
    verifyUserByIdAbs,
    setAdminUserByEmailAbs,
    createUserAbs,
    updateUserAbs,
}