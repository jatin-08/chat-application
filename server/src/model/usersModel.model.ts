import mongoose from "mongoose";

export interface UserModel extends Document {
  id: number;
  username: string;
  email: string;
  password: string;
  status: number;
  is_delete: number;
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
      lowercase: true,
    },
    email: {
      type: String,
      unique: true,
      length: 100,
      require: true,
      lowercase: true,
    },
    password: {
      type: String,
      length: 255,
      require: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    is_delete: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<UserModel>("User", userModelSchema);
