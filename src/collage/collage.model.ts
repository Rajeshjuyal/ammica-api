import * as mongoose from 'mongoose';
export const CollageSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
  branch: { type: String, required: true },
});
export interface Collage {
  id: string;
  name: string;
  location: string;
  branch: string;
}
