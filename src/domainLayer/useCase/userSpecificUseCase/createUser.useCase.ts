const { createUserAbs: createUserUseCase } = require('../../../dataLayer/repository/index'); // Import your dependency
const  createWrapperTocreateUser  = require('../utility');
type functionIdToCheckcreateUser = (...args: any[]) => Promise<any>;
type dataAtCreateUseCase = {
    firstName: string,
    lastName: string,
    mobileNumber: number,
    email: string,
    adhaar: number,
    userType: string,
    postalCode: number,
    panchayath: string,
    city: string,
    district: string,
    state: string,
    country: string,
    about: string,
}
const createUserAbsExecute: functionIdToCheckcreateUser = async (dependency: typeof createUserUseCase, data: dataAtCreateUseCase) => {
  console.log('verifyUserByIdAbsUseCase:', );
  console.log('dependency:', dependency);
  const userData = await dependency(data);

  if (userData === null) {
   return false
  }

  return userData;
};

module.exports = createWrapperTocreateUser(createUserUseCase, createUserAbsExecute)

