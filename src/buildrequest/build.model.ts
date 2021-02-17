import * as mongoose from 'mongoose';
export const BuildSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  School_name: { type: String, required: true },
  Logo: { type: String, required: true },
  Contact: { type: String, required: true },
  Time: { type: String, required: true },
  Theme_color: { type: String, required: true },
  Banner_img: { type: String, required: true },
  headline: { type: String, required: true },
  Appabout: { type: String, required: true },
  Background_img: { type: String, required: true },
});
export interface Build {
  user: string;
  School_name: string;
  Logo: string;
  contact: string;
  Address: string;
  Theme_color: string;
  Banner_img: string;
  headline: string;
  Appabout: string;
  Backgreound_img: string;
}
