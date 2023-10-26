const { updateAbs: wrappedFunctions } = require('../../../domainLayer/useCase/index');

const updateCntrlForRabbitMQ = async (data:any) => {
  try {
    const {
      _id,
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
    } = data;

    const newData = {
      _id,
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
    };

    const users = await wrappedFunctions(newData);

    return users || false;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  updateCntrlForRabbitMQ,
};
