import * as mongooose from 'mongoose';
export const ParentSchema = new mongooose.Schema({
  id: { type: String, required: true },
  parent_name: { type: String, required: true },
  child_name: { type: String, required: true },
  email: { type: String, required: true },
});

export interface Parent {
  id: 'string';
  parent_name: 'string';
  child_name: 'string';
  email: 'string';
}
