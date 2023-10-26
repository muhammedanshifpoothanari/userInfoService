import { Request, Response } from 'express';
const { getAllByDistrictUserAbs : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByDistrictCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllByDistrictCntrl,'hdhdhhdhd');
    const district: string =req.body.district 
    const users = await wrappedFunction(district);
    console.log(users,'hdhdhhdhd');
    if (users) 
      return users;
  return false
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    getAllByDistrictCntrl
};