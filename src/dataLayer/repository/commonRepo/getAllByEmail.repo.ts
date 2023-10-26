const { getUserModel : modelToGetUserByEmail } = require('../getUserModel')
const getAllByEmail = async (Email: string) => {
    if (!Email)
        throw new Error('email was not properly passed to the repository!');

    const userModel = modelToGetUserByEmail();
    try {
        const usersArray = await userModel.find({ email: Email }).exec();
        if (!usersArray)
            return false
        return usersArray;
    } catch (error) {
        throw new Error('Error in getting user from the database by user email!');
    }
};

module.exports = {
    getAllByEmail
}