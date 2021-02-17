import * as mongoose from 'mongoose';
export const SectioSchema = new mongoose.Schema({
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
  name: { type: String, required: true },
});
export interface Sectio {
  class: string;
  name: string;
}
