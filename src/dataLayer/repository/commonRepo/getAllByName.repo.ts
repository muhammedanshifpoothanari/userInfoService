const { getUserModel: modelToGetUserByName } = require('../getUserModel');
const getAllByName = async (
    firstName: string,
  lastName: string
) => {
    const userModel = modelToGetUserByName();
    try { 
    if (!firstName && !lastName) {
       console.log('name not provided properly');
       
      }
    
      const query = {
        firstName: firstName || null,
        lastName: lastName || null,
      };

        const usersArray = await userModel.find(query).exec();
        
        if (usersArray.length === 0) {
          return false;
        }

        return usersArray;
      } catch (error) {
        console.log(error);
      }
    };
  
    module.exports = {
         getAllByName
    };