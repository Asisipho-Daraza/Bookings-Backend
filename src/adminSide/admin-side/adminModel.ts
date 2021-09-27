import * as mongoose from 'mongoose';

export const AdminSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Your name is required'] },
  location: { type: String, required: [true, 'Location is required'] },
  hairnailname: {
    type: String,
    required: [true, 'Style is required'],
    unique: [true, 'Style already exists'],
  },
  price: { type: Number, required: [true, 'Price is required'] },
  image: {
    type: String,
    required: [true, 'Image is required'],
    unique: [true, 'Image already exists'],
  },
  category: {
    type: String,
    enum: ['hair', 'nails'],
    required: [true, 'Specify the category between hair and nails'],
  },
  size: {
    type: String,
    enum: ['short', 'medium', 'long'],
    required: [false, 'Specify the length between short, medium and long'],
  },
  description: {
    type: String,
    required: [true, 'Describe the nail or style uploaded'],
  },
});

export interface Admin extends mongoose.Document {
  name: string;
  hairnailname: string;
  price: number;
  image: string;
  category: string;
  description: string;
  size: string;
  id: string;
}
