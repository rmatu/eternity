import express from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModel";

const productRouter = express.Router();

productRouter.get(
  "/",
  expressAsyncHandler(async (_, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

export default productRouter;
