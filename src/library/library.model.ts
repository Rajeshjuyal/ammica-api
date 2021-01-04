import * as mongoose from 'mongoose';
export const LibrarySchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  date: { type: String, required: true },
});
export interface library {
  (id: string, name: string, date: string);
}
