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
}

export interface IBasket extends IProduct {
  qty: number;
}

export interface IReviews {
  _id: string;
  body: string;
  rating: number;
  name: string;
  createdAt: string;
  user: string;
  product: string;
}

export interface IOrder {
  _id: string;
  orderItems: {
    name: string;
    qty: number;
    image: string;
    price: number;
    product: string;
  }[];
  shippingAddress: {
    fullName: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  paymentResult: {
    id: string;
    status: string;
    updateTime: string;
  };
  itemsPrice: number;
  shippingPrice: number;
  totalPrice: number;
  user: string;
  paidAt: Date;
  isDelivered: boolean;
  deliveredAt: string;
  createdAt: string;
}
