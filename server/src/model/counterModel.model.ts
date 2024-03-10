import mongoose, { Document, Model } from "mongoose";

export interface CounterModel extends Document {
  id: string;
  seqId: number;
}

const counterModelSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  seqId: {
    type: Number,
    required: true, // Corrected typo: 'require' to 'required'
  },
});

export default mongoose.model<CounterModel>("Counter", counterModelSchema);
