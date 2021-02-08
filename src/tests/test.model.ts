import * as mongoose from 'mongoose';
export const TestSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: 'true',
  },
  name: { type: String, required: true },
});

export interface Test {
  user: string;
  name: string;
}
