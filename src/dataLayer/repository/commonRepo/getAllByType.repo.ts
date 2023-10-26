const { getUserModel : modelToGetUserByType } = require('../getUserModel')
const getAllByType = async (type: string) => {
    if (!type)
        throw new Error('Type was not properly passed to the repository!');

    const userModel = modelToGetUserByType();
    try {
        const usersArray = await userModel.find({ userType: type }).exec();
        if (!usersArray)
            return false
        return usersArray;
    } catch (error) {
        throw new Error('Error in getting user from the database by user type!');
    }
};

module.exports = {
    getAllByType
}