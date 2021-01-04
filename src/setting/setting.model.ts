import * as mongoose from 'mongoose';
export const SettingSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  logo: { type: String, required: true },
  address: { type: String, required: true },
  contact: { type: String, required: true },
  email: { type: String, required: true },
  about: { type: String, required: true },
  primary: { type: String, required: true },
  secondary: { type: String, required: true },
});

export class Setting {
  constructor(
    public id: string,
    public name: string,
    public logo: string,
    public address: string,
    public contact: string,
    public email: string,
    public about: string,
    public primary: string,
    public secondary: string,
  ) {}
}
