const { getUserModel : modelToGetUserByDistrict } = require('../getUserModel')
const getAllByDistrict = async (district: string) => {
    if (!district)
        throw new Error('District was not properly passed to the repository!');

    const userModel = modelToGetUserByDistrict();
    try {
        const usersArray = await userModel.find({ district: district }).exec();
        if (!usersArray)
            return false
        return usersArray;
    } catch (error) {
        throw new Error('Error in getting user from the database by user District!');
    }
};

module.exports = {
    getAllByDistrict
}