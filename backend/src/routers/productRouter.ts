import express from "express";
import multer from "multer";
import expressAsyncHandler from "express-async-handler";

import Product from "../models/productModel";

// Multer config
const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "./uploads/");
  },
  filename: (_, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // 5MB limit
  },
  fileFilter: (_, file, cb) => {
    // accept a file
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      // accept a file
      cb(null, false);
    }
  },
});

// Routes
const productRouter = express.Router();

productRouter.get(
  "/",
  expressAsyncHandler(async (_, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

productRouter.post(
  "/product",
  upload.single("mainProductImage"),
  expressAsyncHandler(async (req, res) => {
    console.log(req.file);
    const product = new Product({
      name: req.body.name,
      imagePath: req.body.imagePath,
      brand: req.body.brand,
      description: req.body.description,
      price: req.body.price,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      numReviews: req.body.numReviews,
      mainProductImage: req.file.path,
      specification: {
        sex: req.body.sex,
        claspType: req.body.claspType,
        caseSize: req.body.caseSize,
        brandColor: req.body.branColor,
        caseWidth: req.body.caseWidth,
        lensType: req.body.lensType,
        caseFinish: req.body.caseFinish,
        watchMovement: req.body.watchMovement,
        waterResistance: req.body.waterResistance,
        strapAndLugWidth: req.body.strapAndLugWidth,
      },
    });
    const createdProduct = await product.save();
    res.send({
      _id: createdProduct._id,
      name: createdProduct.name,
      brand: createdProduct.brand,
      description: createdProduct.description,
      price: createdProduct.price,
      countInStock: createdProduct.countInStock,
      rating: createdProduct.rating,
      numReviews: createdProduct.numReviews,
      mainProductImage: createdProduct.mainProductImage,
      specification: {
        sex: createdProduct.specification.sex,
        claspType: createdProduct.specification.claspType,
        caseSize: createdProduct.specification.caseSize,
        brandColor: createdProduct.specification.brandColor,
        caseWidth: createdProduct.specification.caseWidth,
        lensType: createdProduct.specification.lensType,
        caseFinish: createdProduct.specification.caseFinish,
        watchMovement: createdProduct.specification.watchMovement,
        waterResistance: createdProduct.specification.waterResistance,
        strapAndLugWidth: createdProduct.specification.strapAndLugWidth,
      },
    });
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
