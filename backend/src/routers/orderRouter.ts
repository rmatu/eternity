import express from "express";
import expressAsyncHandler from "express-async-handler";
import { SHIPPING_PRICE } from "../constants";
import Order from "../models/orderModel";
import Product from "../models/productModel";
import { isAuth, mergeTwoArraysOfObject } from "../utils";

const orderRouter = express.Router();

orderRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const order = new Order({
      orderItems: req.body.orderItems,
      shippingAddress: req.body.shippingAddress,
      paymentResult: req.body.paymentResult,
      itemsPrice: req.body.itemsPrice,
      shippingPrice: req.body.shippingPrice,
      totalPrice: req.body.totalPrice,
      paidAt: req.body.paidAt,
      isDelivered: req.body.isDelivered,
      deliveredAt: req.body.deliveredAt,
      email: req.body.email,
      user: req.body.user || null,
    });

    const createdProduct = await order.save();
    res.send(createdProduct);
  })
);

orderRouter.post(
  "/products-total-price",
  expressAsyncHandler(async (req, res) => {
    //@ts-ignore
    const productsIds = req.body.productsList.map((el) => el.productId);
    const productsList = await Product.find({
      _id: { $in: productsIds },
    });

    if (!productsList) {
      res.status(404).send("Product doesn't exist");
      return;
    }

    const singleProductArray = productsList.map((el) => ({
      id: el._id,
      price: el.price,
    }));

    const mergedArray = mergeTwoArraysOfObject(singleProductArray, req.body.productsList);

    const totalPrice = mergedArray.map((el) => el.qty * el.price).reduce((a, b) => a + b, 0);

    res.send({ price: totalPrice + SHIPPING_PRICE });
  })
);

orderRouter.get(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    //@ts-ignore
    const skip = parseInt(req.query.skip);
    //@ts-ignore
    const limit = parseInt(req.query.limit);

    const orders = await Order.find({ user: req.params.id }).sort({ _id: -1 }).skip(skip).limit(limit);

    if (!orders) {
      res.status(404).send({ message: "Orders not Found" });
      return;
    }
    res.send(orders);
  })
);

export default orderRouter;
