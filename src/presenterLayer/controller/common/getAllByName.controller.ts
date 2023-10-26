import { Request, Response } from 'express';
const { getAllByNameUserAbs : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByNameCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllByNameCntrl,'hdhdhhdhd');
    const firstName: string =req.body.firstName;
    const lastName: string =req.body.lastName;
    const users = await wrappedFunction(firstName,lastName);
    console.log(users,'hdhdhhdhd');
    if (users) 
      return users
  return false
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    getAllByNameCntrl
};