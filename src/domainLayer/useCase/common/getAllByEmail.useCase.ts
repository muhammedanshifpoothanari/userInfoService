const { getAllByEmailAbs: getAllByEmailUseCase } = require('../../../dataLayer/repository/index'); // Import your dependency
const  createWrapperToGetAllByEmail  = require('../utility');
type functionCityToGetAllUserByEmail = (...args: any[]) => Promise<any>;
const getAllByEmailExecute: functionCityToGetAllUserByEmail = async (dependency: typeof getAllByEmailUseCase,email: string) => {
  console.log('verifyUserByIdAbsUseCase:', );
  console.log('dependency:', dependency);
  const userData = await dependency(email);

  if (userData === null) {
   return false
  }
  return userData;
};

module.exports = createWrapperToGetAllByEmail(getAllByEmailUseCase, getAllByEmailExecute)

