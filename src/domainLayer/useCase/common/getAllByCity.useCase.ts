const { getAllByCityAbs: getAllByCityUseCase } = require('../../../dataLayer/repository/index'); // Import your dependency
const  createWrapperToGetAllByCity  = require('../utility');
type functionCityToGetAllUserByCity = (...args: any[]) => Promise<any>;
const getAllByCityExecute: functionCityToGetAllUserByCity = async (dependency: typeof getAllByCityUseCase,city: string) => {
  console.log('verifyUserByIdAbsUseCase:', );
  console.log('dependency:', dependency);
  const userData = await dependency(city);

  if (userData === null) {
   return false
  }

  return userData;
};

module.exports = createWrapperToGetAllByCity(getAllByCityUseCase, getAllByCityExecute)

