import mongoose, { Document } from 'mongoose';

export interface Item {
  name: string
  amount: number
  createdAt?: Date
  updatedAt?: Date
}

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    default: 0,
  }
}, {
  timestamps: true,
});

export default mongoose.model<Item & Document>('wallet', schema);
