import { Request, Response } from 'express';
const { getAllByCountryUserAbs : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByCountryCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllByCountryCntrl,'hdhdhhdhd');
    const country: string = req.body.country 
    const users = await wrappedFunction(country);
    console.log(users,'hdhdhhdhd');
    if (users) 
      return users;
  return false;    
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    getAllByCountryCntrl
};