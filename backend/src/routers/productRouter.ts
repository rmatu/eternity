import express from "express";
import expressAsyncHandler from "express-async-handler";

import Product from "../models/productModel";
import Review from "../models/reviewModel";
import User from "../models/userModel";

import multer from "multer";
import fs from "fs";

// Multer config
const storage = multer.diskStorage({
  destination: (req, _, cb) => {
    const pathBrand = req.body.brand.toLowerCase().replace(/\s+/g, "-");
    const pathModel = req.body.name.toLowerCase().replace(/\s+/g, "-");
    fs.mkdirSync(`./uploads/${pathBrand}/${pathModel}`, { recursive: true });
    cb(null, `./uploads/${pathBrand}/${pathModel}`);
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
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png"
    ) {
      cb(null, true);
    } else {
      // decline a file
      cb(null, false);
    }
  },
});

// Routes
const productRouter = express.Router();

productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    if (req.query.skip && req.query.limit) {
      //@ts-ignore
      const skip = parseInt(req.query.skip);
      //@ts-ignore
      const limit = parseInt(req.query.limit);

      const products = await Product.find({}).skip(skip).limit(limit);
    } else {
      const products = await Product.find({});
      res.send(products);
    }
  })
);

productRouter.post(
  "/product",
  upload.array("images", 10),
  expressAsyncHandler(async (req, res) => {
    const mainPhotoUrl = req.files
      //@ts-ignore
      .filter((el: any) => el.path.includes(req.body.mainImagePath))
      .map((el: any) => el.path)[0];
    const restPhotosUrls = req.files
      //@ts-ignore
      .filter((el: any) => !el.path.includes(req.body.mainImagePath))
      .map((el: any) => el.path);

    const product = new Product({
      name: req.body.name,
      imagePath: req.body.imagePath,
      brand: req.body.brand,
      description: req.body.description,
      price: req.body.price,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      numReviews: req.body.numReviews,
      mainProductImage: mainPhotoUrl,
      restImages: [...restPhotosUrls],
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
    if (req.query.skip && req.query.limit) {
      const product = await Product.findById(req.params.id);

      if (!product) {
        res.status(404).send({ message: "Product not Found" });
        return;
      }

      //@ts-ignore
      const skip = parseInt(req.query.skip);
      //@ts-ignore
      const limit = parseInt(req.query.limit);

      const similarProducts = await Product.find({
        "specification.sex": product.specification.sex,
        _id: { $ne: product._id },
      })
        .skip(skip)
        .limit(limit);
      if (similarProducts) {
        res.send(similarProducts);
      } else {
        res.status(404).send({ message: "Similar Products Not Found" });
      }
    } else {
      const product = await Product.findById(req.params.id);
      if (product) {
        res.send(product);
      } else {
        res.status(404).send({ message: "Product Not Found" });
      }
    }
  })
);

productRouter.put(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    const user = await User.findById(req.body.userId);

    if (!user) {
      res.status(404).send({ message: "User not Found" });
      return;
    }

    if (product) {
      const review = new Review({
        body: req.body.body,
        username: user.name,
        rating: req.body.rating,
        product: product._id,
        user: user._id,
      });

      product.reviews.push(review._id);

      const updatedProduct = await product.save();
      await review.save();

      res.send(updatedProduct);
    } else {
      res.status(404).send({ message: "Product not Found" });
    }
  })
);

productRouter.get(
  "/reviews/:id",
  expressAsyncHandler(async (req, res) => {
    //@ts-ignore
    const skip = parseInt(req.query.skip) || 0;
    //@ts-ignore
    const limit = parseInt(req.query.limit) || 4;
    const reviews = await Review.find({ product: req.params.id })
      .sort({ _id: -1 })
      .skip(skip)
      .limit(limit);
    if (reviews) {
      res.send(reviews);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

export default productRouter;
