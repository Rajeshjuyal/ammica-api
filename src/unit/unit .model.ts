import * as mongoose from 'mongoose';
export const UnitSchema = new mongoose.Schema({
  id: { type: String, required: true },
 unit_name: { type: String, required: true },
  chapter_id: { type: String, required: true },
  
});






export interface Unit{
  id:string,
    unit_name:string,
   chapter_id:string,

   
}