const { getAllByCountryAbs: getAllByCountryUseCase } = require('../../../dataLayer/repository/index'); // Import your dependency
const  createWrapperToGetAllByCountry  = require('../utility');
type functionCountryToGetAllUserByCountry = (...args: any[]) => Promise<any>;
const getAllByCountryExecute: functionCountryToGetAllUserByCountry = async (dependency: typeof getAllByCountryUseCase,country: string) => {
  console.log('getAllByCountryExecute:', );
  console.log('dependency:', dependency);
  const userData = await dependency(country);

  if (userData === null) {
   return false
  }

  return userData;
};

module.exports = createWrapperToGetAllByCountry(getAllByCountryUseCase, getAllByCountryExecute)

