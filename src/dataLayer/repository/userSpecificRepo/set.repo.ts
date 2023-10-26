const { getUserModel: modelToCreateUser } = require('../getUserModel');
type userDataToSet = {
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
const createUser = async (userData: userDataToSet) => {
  if (!userData || !userData.email) {
    throw new Error('Email was not properly passed to the repository!');
  }

  const userModel = modelToCreateUser();

  try {
    // Create a new user document with the provided data, including the isAdmin field
    const newUser = new userModel({
        ...userData,
        isBlocked: false,
        isVerified: false,
        isAdmin: false,
        isCreated : new Date(),
        isUpdated : new Date()
    });

    // Save the new user to the database
    const doneTheJob =await newUser.save();
    if(!doneTheJob)
    return false;
    // Return the newly created user
    return true;
  } catch (error) {
    throw new Error(`Error in creating the user in the database: ${error}`);
  }
};

module.exports = {
  createUser,
};
