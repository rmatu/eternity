import express from "express";
import multer from "multer";
import expressAsyncHandler from "express-async-handler";

import Product from "../models/productModel";
import Review from "../models/reviewModel";
import User from "../models/userModel";

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
        brandColor: req.body.brandColor,
        caseWidth: req.body.caseWidth,
        lensType: req.body.lensType,
        caseFinish: req.body.caseFinish,
        watchMovement: req.body.watchMovement,
        waterResistance: req.body.waterResistance,
        strapAndLugWidth: req.body.strapAndLugWidth,
      },
    });
    const createdProduct = await product.save();
    res.send(createdProduct);
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

productRouter.put(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    const user = await User.findById(req.body.userId);

    if (product && user) {
      const review = new Review({
        body: req.body.body,
        rating: req.body.rating,
        product: product._id,
        user: user._id,
      });

      product.reviews.push(review._id);

      const updatedProduct = await product.save();
      await review.save();

      res.send(updatedProduct);
    } else {
      res.status(404).send({ message: "404 Not Found" });
    }
  })
);

productRouter.get(
  "/reviews/:id",
  expressAsyncHandler(async (req, res) => {
    const reviews = await Review.find({ product: req.params.id });
    if (reviews) {
      res.send(reviews);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

export default productRouter;
