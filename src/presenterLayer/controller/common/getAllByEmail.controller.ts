import { Request, Response } from 'express';
const { getAllByEmailUserAbs : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByEmailCntrl = async (req: Request, res: Response) => {
  try {
    console.log('getAllCntrl','hdhdhhdhd');
    console.log(req.body,'emailsdsfdass');
    
    const email: string =req.body.email 
    console.log(email,'hdhdhhdhd');
    const users = await wrappedFunction(email);
    console.log(users,'hdhdhhdhd');
    if (users)
      return users;
    
  return false;
    
  } catch (error) {
    console.log(error); 
  }
};


module.exports = {
    getAllByEmailCntrl
};