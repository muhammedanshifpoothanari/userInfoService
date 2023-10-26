const { getUserModel: modelToCheckUserIsAdmin } = require('../getUserModel');

const isAdmin = async (email: string) => {
  if (!email) {
    throw new Error('Email was not properly passed to the repository!');
  }

  const userModel = modelToCheckUserIsAdmin();

  try {
    // Find a user with the specified email and isAdmin field set to true
    const user = await userModel.findOne({ email, isAdmin: true }).exec();

    if (!user || user.length === 0) {
      // If no matching user is found or the user is not an admin, return false
      return false;
    }

    // User is an admin
    return true;
  } catch (error) {
    throw new Error('Error in checking if the user is an admin from the database!');
  }
};

module.exports = {
  isAdmin,
};
