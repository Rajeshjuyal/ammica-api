import * as mongoose from 'mongoose';
export const ClassSchema = new mongoose.Schema({
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
    required: true,
  },
  name: { type: String, required: true },
});

export interface Class {
  (name: string);
}
