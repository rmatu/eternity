export interface IProduct {
  _id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
  mainProductImage: string;
  restImages: string[];
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
}

export interface IReviews {
  body: string;
  rating: number;
  name: string;
  createdAt: string;
}
