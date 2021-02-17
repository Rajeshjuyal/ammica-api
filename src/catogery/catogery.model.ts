import * as mongoose from 'mongoose';
export const CatogerySchema = new mongoose.Schema({
  name: { type: String, required: true },
  total: { type: String, required: true },
});
export interface Catogery {
  name: string;
  total: string;
}
