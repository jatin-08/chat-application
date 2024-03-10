import mongoose from "mongoose";

export interface UserModel extends Document {
  id: number;
  username: string;
  email: string;
  password: string;
}

export const userModelSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    username: {
      type: String,
      unique: true,
      length: 50,
      require: true,
    },
    email: {
      type: String,
      unique: true,
      length: 100,
      require: true,
    },
    password: {
      type: String,
      length: 255,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<UserModel>("User", userModelSchema);
