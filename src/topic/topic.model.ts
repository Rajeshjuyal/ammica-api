import * as mongoose from 'mongoose';
export const TopicSchema = new mongoose.Schema({
  id: { type: String, required: true },
  topicname: { type: String, required: true },
  videourl: { type: String, required: true },
});

export interface Topic {
  id: string;
  topicname: string;
  videourl: string;
}
