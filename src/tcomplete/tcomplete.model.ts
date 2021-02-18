import * as mongoose from 'mongoose';
export const TcompleteSchema = new mongoose.Schema({
  topic: { type: mongoose.Schema.Types.ObjectId, ref: 'topic', required: true },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'teacher',
    required: true,
    status6001: { type: String, required: true },
  },
});
export interface Tcomplete {
  topic: string;
  teacher: string;
  status6001: string;
}
