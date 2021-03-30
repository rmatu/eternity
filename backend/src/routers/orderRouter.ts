import express from "express";
import * as orderController from "../controllers/orderController";
import { isAuth } from "../utils";

const orderRouter = express.Router();

orderRouter.get("/:id", isAuth, orderController.getAllUserOrders);

orderRouter.post("/", orderController.postOrder);
orderRouter.post("/products-total-price", orderController.totalProductsPrice);

export default orderRouter;
