import mongoose, { Document } from "mongoose";

export interface IReview extends Document {
  body: string;
  rating: string;
  product: string;
  user: string;
}

export const reviewSchema = new mongoose.Schema(
  {
    body: { type: String, required: true },
    rating: { type: Number, required: true },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model<IReview>("Review", reviewSchema);

export default Review;
