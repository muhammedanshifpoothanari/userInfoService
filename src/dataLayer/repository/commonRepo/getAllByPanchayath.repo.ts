const { getUserModel : modelToGetUserByPanchayath } = require('../getUserModel')
const getAllByPanchayath = async (panchayath: string) => {
    if (!panchayath)
        throw new Error('Panchayath was not properly passed to the repository!');

    const userModel = modelToGetUserByPanchayath();
    try {
        const usersArray = await userModel.find({ panchayath: panchayath }).exec();
        if (!usersArray)
            return false
        return usersArray;
    } catch (error) {
        throw new Error('Error in getting user from the database by user Panchayath!');
    }
};

module.exports = {
    getAllByPanchayath
}