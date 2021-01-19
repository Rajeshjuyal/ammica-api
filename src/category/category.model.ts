import * as mongoose from'mongoose';
export const CatogeryScheam=new mongoose.Schema({
  name:{type:String,required:true},
  percentage:{type:String,required:true}
})
  
export interface Catogery{
  name:string;
  percentage:string;
}