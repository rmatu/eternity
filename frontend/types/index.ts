export interface IProduct {
  name: string;
  brand: string;
  description: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
  mainProductImage: string;
  specification: {
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
