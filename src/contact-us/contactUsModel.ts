import * as mongoose from 'mongoose';

export const ContactUsSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Your name is required'] },
  number: { type: Number, required: [true, 'Your number is required'] },
  checkbox: { type: String },
  message: { type: String },
});

export interface ContactUs extends mongoose.Document {
  name: string;
  number: number;
  checkbox: string;
  message: string;
  id: string;
}
