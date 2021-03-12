import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModel";
import { isAuth } from "../utils";

const orderRouter = express.Router();

orderRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const order = new Order({
      orderItems: req.body.orderItems,
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      paymentResult: req.body.paymentResult,
      itemsPrice: req.body.itemsPrice,
      shippingPrice: req.body.shippingPrice,
      totalPrice: req.body.totalPrice,
      paidAt: req.body.paidAt,
      isDelivered: req.body.isDelivered,
      deliveredAt: req.body.deliveredAt,
      email: req.body.email,
    });

    const createdProduct = await order.save();
    res.send(createdProduct);
  })
);

export default orderRouter;
