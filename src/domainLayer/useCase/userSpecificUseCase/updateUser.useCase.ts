const { updateUserAbs: updateUserUseCase } = require('../../../dataLayer/repository/index'); // Import your dependency
const  createWrapperToupdateUser  = require('../utility');
type functionIdToCheckupdateUser = (...args: any[]) => Promise<any>;
type dataAtupdateUserUseCase = {
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
const updateUserAbsExecute: functionIdToCheckupdateUser = async (dependency: typeof updateUserUseCase,data: dataAtupdateUserUseCase) => {
  console.log('verifyUserByIdAbsUseCase:', );
  console.log('dependency:', dependency);
  const email: string = data.email
  console.log(data,'at usecase');
  
  const userData = await dependency(email, data);

  if (userData === null) {
   return false
  }

  return userData;
};

module.exports = createWrapperToupdateUser(updateUserUseCase, updateUserAbsExecute)
