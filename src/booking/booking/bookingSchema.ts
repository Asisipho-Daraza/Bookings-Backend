import * as mongoose from 'mongoose';

export const BookingSchema = new mongoose.Schema({
  bookdate: { type: Date },
  location: { type: String },
});

export interface Booking extends mongoose.Document {
  bookdate: string;
  location: string;
  id: string;
}
