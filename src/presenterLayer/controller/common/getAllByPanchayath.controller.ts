import { Request, Response } from 'express';
const { getAllByPanchayathUserAbs : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByPanchayathCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllByPanchayathCntrl,'hdhdhhdhd');
    const panchayath: string =req.body.panchayath 
    const users = await wrappedFunction(panchayath);
    console.log(users,'hdhdhhdhd');
    if (users) 
      return users
  return false
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    getAllByPanchayathCntrl
};