const { getAllByPanchayathAbs: getAllByPanchayathUseCase } = require('../../../dataLayer/repository/index'); // Import your dependency
const  createWrapperToGetAllByPanchayath  = require('../utility');
type functionPanchayathToGetAllUserByPanchayath = (...args: any[]) => Promise<any>;
const getAllByPanchayathExecute: functionPanchayathToGetAllUserByPanchayath = async (dependency: typeof getAllByPanchayathUseCase,panchayath: string) => {
  console.log('verifyUserByIdAbsUseCase:', );
  console.log('dependency:', dependency);
  const userData = await dependency(panchayath);

  if (userData === null) {
   return false
  }

  return userData;
};

module.exports = createWrapperToGetAllByPanchayath(getAllByPanchayathUseCase, getAllByPanchayathExecute)

