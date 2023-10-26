const { getUserModel : modelToGetUserByCity } = require('../getUserModel')
const getAllByCity = async (city: string) => {
    if (!city)
        throw new Error('City was not properly passed to the repository!');

    const userModel = modelToGetUserByCity();
    try {
        const usersArray = await userModel.find({ city: city }).exec();
        if (!usersArray)
            return false
        return usersArray;
    } catch (error) {
        throw new Error('Error in getting user from the database by user city!');
    }
};

module.exports = {
    getAllByCity
}