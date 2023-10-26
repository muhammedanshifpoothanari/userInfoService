const { getUserModel: modelToUpdateUser } = require('../getUserModel');

type userDataToUpdate = {
  firstName: string;
  lastName: string;
  mobileNumber: number;
  email: string;
  adhaar: number;
  userType: string;
  postalCode: number;
  panchayath: string;
  city: string;
  district: string;
  state: string;
  country: string;
  about: string;
  isBlocked: boolean;
  isVerified: boolean;
  isAdmin: boolean;
};

// Define a function to update user information
const updateUser = async (email: string, updatedUserData: userDataToUpdate) => {
  console.log(email,updatedUserData,'jhjgvfreer');
  
  if (!email || !updatedUserData) {
    throw new Error('Email and updated user data must be provided!');
  }

  const userModel = modelToUpdateUser();

  try {
    // Find the user by email
    const user = await userModel.findOne({ email: email }).exec();

    if (!user) {
      throw new Error('User not found in the database!');
    }

    // Update user fields based on the updatedUserData object
    for (const key of Object.keys(updatedUserData)) {
      if(key !== '_id')
        user[key as keyof userDataToUpdate] = updatedUserData[key as keyof userDataToUpdate];
        
    }

    // Update the 'isUpdated' field with the current date and time
    user.isUpdated = new Date();

    // Save the updated user document
    const updatedUser = await user.save();
    if(updatedUser === null)
    return false;

    return true;
  } catch (error) {
    throw new Error(`Error in updating the user in the database: ${error}`);

  }
};

module.exports = {
  updateUser,
};
