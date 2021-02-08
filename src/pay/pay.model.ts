import * as mongooose from 'mongoose';
export const PaySchema = new mongooose.Schema({
  name: { type: String, required: true },
});
export interface Pay {
  name: string;
}
