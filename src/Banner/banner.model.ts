import * as mongoose from 'mongoose';
export const BannerSchema = new mongoose.Schema({
  id: { type: String, required: true },
  image1: { type: String, required: true },
  status: { type: Boolean, default: true },
  role: { type: String, required: true },
});

export interface Banner {
  id: string;
  image1: string;
  status: boolean;
  role: string;
}
