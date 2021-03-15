import mongoose, { Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  brand: string;
  description: string;
  price: number; // in cents;
  countInStock: number;
  rating: number;
  numReviews: number;
  mainProductImage: string;
  restImages: string[];
  mainProduct: boolean;
  prevPrice: number;
  specification: {
    sex: string;
    claspType: string;
    caseSize: string;
    brandColor: string;
    caseWidth: number;
    lensType: string;
    caseFinish: string;
    watchMovement: string;
    waterResistance: number;
    strapAndLugWidth: number;
  };
  reviews: [
    {
      body: string;
      rating: string;
    }
  ];
}

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    mainProductImage: { type: String, required: true },
    mainProduct: { type: Boolean, required: true, default: false },
    prevPrice: { type: Number },
    restImages: [
      {
        type: String,
        default: [],
      },
    ],
    specification: {
      sex: { type: String },
      claspType: { type: String },
      caseSize: { type: String },
      brandColor: { type: String },
      caseWidth: { type: Number },
      lensType: { type: String },
      caseFinish: { type: String },
      watchMovement: { type: String },
      waterResistance: { type: Number },
      strapAndLugWidth: { type: Number },
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const Product = mongoose.model<IProduct>("Product", productSchema);

export default Product;
