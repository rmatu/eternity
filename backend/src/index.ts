import dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

import productRouter from "./routers/productRouter";
import userRouter from "./routers/userRouter";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/eternity", {
  useNewUrlParser: true, // get rid of depricated warnings
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.get("/", (_, res) => {
  res.send("Server is ready");
});

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

// An error catcher
app.use((err: any, _: Request, res: Response, __: NextFunction) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`✅ Server ready at port ${port}`);
});
