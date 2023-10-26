const { createAbs : wrappedFunctionForCreating } = require('../../../domainLayer/useCase/index');


const setCntrl = async (data:any) => {
  try {
    const {
        firstName,
        lastName,
        mobileNumber,
        email,
        adhaar,
        userType,
        postalCode,
        panchayath,
        city,
        district,
        state,
        country,
        about,
    } = data
    const newData = {
        firstName,
        lastName,
        mobileNumber,
        email,
        adhaar,
        userType,
        postalCode,
        panchayath,
        city,
        district,
        state,
        country,
        about,
    }
    const users = await wrappedFunctionForCreating(newData);

    if (users) 
      return users;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    setCntrl
};