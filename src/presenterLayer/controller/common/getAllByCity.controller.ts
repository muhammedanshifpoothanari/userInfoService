import { Request, Response } from 'express';
const { getAllByCityUserAbs : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByCityCntrl = async (req: Request, res: Response) => {
  try {
    console.log('getAllCntrl','hdhdhhdhd');
    const city: string =req.body.city 
    const users = await wrappedFunction(city);
    console.log(users,'hdhdhhdhd');
    if (users)
      return users;
    
  return false;
    
  } catch (error) {
    console.log(error); 
  }
};


module.exports = {
    getAllByCityCntrl
};