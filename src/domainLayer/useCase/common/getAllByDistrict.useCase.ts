const { getAllByDistrictAbs: getAllByDistrictUseCase } = require('../../../dataLayer/repository/index'); // Import your dependency
const  createWrapperToGetAllByDistrict  = require('../utility');
type functionDistrictToGetAllUserByDistrict = (...args: any[]) => Promise<any>;
const getAllByDistrictExecute: functionDistrictToGetAllUserByDistrict = async (dependency: typeof getAllByDistrictUseCase,district: string) => {
  console.log('verifyUserByIdAbsUseCase:', );
  console.log('dependency:', dependency);
  const userData = await dependency(district);

  if (userData === null) {
   return false
  }

  return userData;
};

module.exports = createWrapperToGetAllByDistrict(getAllByDistrictUseCase, getAllByDistrictExecute)

