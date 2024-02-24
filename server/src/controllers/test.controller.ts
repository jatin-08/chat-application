import express, { Response, Request } from "express";
import { PATH } from "../config";

export class TestController {
  constructor(public path: any, public router = express.Router()) {
    this.path = "/hello";
    this.__initializeRoutes();
  }

  public __initializeRoutes(): void {
    this.router.get(`${this.path}/chat`, this.testFunction.bind(this));
  }

  public testFunction(request: Request, response: Response) {
    response.send("hello Chat");
  }
}
