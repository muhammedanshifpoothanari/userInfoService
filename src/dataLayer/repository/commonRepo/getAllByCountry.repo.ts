const { getUserModel : modelToGetUserByCountry } = require('../getUserModel')
const getAllByCountry = async (country: string) => {
    if (!country)
        throw new Error('Country was not properly passed to the repository!');

    const userModel = modelToGetUserByCountry();
    try {
        const usersArray = await userModel.find({ country: country }).exec();
        if (!usersArray)
            return false
        return usersArray;
    } catch (error) {
        throw new Error('Error in getting user from the database by user Country!');
    }
};

module.exports = {
    getAllByCountry
}