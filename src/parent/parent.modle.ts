import * as mongoose from 'mongoose';
export const ParentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: 'true',
  },
  child_count: { type: Number, required: true },
});

export interface Parent {
  user: 'string';
  child: 'number';
}
