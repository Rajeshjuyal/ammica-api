import * as mongoose from 'mongoose';
export const SurveySchema = new mongoose.Schema({
  name: { type: String, required: true },
});
export interface Survey {
  name: string;
}
