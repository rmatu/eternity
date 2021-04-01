import express from "express";
import fs from "fs";
import multer from "multer";

import { isAdmin, isAuth } from "../utils";
import * as productController from "../controllers/productController";

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
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/jpg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      // decline a file
      cb(null, false);
    }
  },
});

const productRouter = express.Router();

productRouter.get("/", productController.getAllProducts);
productRouter.get("/main-product", productController.getMainProduct);
productRouter.get("/search", productController.getSearchedProducts);
productRouter.get("/:id", productController.getProduct);
productRouter.get("/:id/reviews", productController.getProductReviews);

productRouter.post("/cartItems", productController.getCartItems);
productRouter.post("/product", upload.array("images", 10), isAuth, isAdmin, productController.postProduct);
productRouter.post("/:id/reviews", isAuth, productController.postNewReview);

productRouter.put("/:id", isAuth, productController.putNewReview);
productRouter.put("/:id/update-price", isAuth, isAdmin, productController.putProductPrice);

productRouter.delete("/:id/reviews", isAuth, productController.deleteReview);

export default productRouter;
