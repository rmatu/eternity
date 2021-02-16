import { IUser } from "src/models/userModel";

declare global {
  namespace Express {
    interface Request {
      user: IUser;
    }
  }
}
