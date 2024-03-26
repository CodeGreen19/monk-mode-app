import { NextFunction, Request, Response } from "express";

interface User {
  _id: string;
  // Other user properties
}

interface ExtendedRequest extends Request {
  user?: User; // Optional user property
}

export type ControllerType = (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => Promise<void | Response<any, Record<string, any>>>;

export interface UserType {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
