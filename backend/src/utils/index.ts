import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { IUser } from "src/models/userModel";

export const generateToken = (user: IUser) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || "somethingsecret",
    {
      expiresIn: "30d",
    }
  );
};

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
    jwt.verify(
      token,
      process.env.JWT_SECRET || "somethingsecret",
      (err, decode) => {
        if (err) {
          res.status(401).send({ message: "Invalid Token" });
        } else {
          //@ts-ignore
          req.user = decode;
          next();
        }
      }
    );
  } else {
    res.status(401).send({ message: "No Token" });
  }
};

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: "Invalid Admin Token" });
  }
};

export const mergeTwoArraysOfObject = (arr1: any, arr2: any) => {
  //@ts-ignore
  let result = [];

  arr1.forEach(function (o: any) {
    arr2.forEach(function (c: any) {
      if (o._id === c.productId) result.push(Object.assign({}, o, c));
    });
  });
  //@ts-ignore
  return result;
};
