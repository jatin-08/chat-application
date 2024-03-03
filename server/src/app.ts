import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { port, path, dbString } from "./config";
import { BaseController } from "./controller/baseController";

export class App {
  public app: express.Application;
  public port: any;

  constructor(controller: BaseController[], port: any) {
    this.app = express();
    this.port = port;
    this._initializeMiddleware();
    this._connectToDB();
    this._initializeController(controller);
  }

  private _initializeController(controllers: BaseController[]) {
    controllers.forEach((controller) => {
      this.app.use(path, controller.router);
    });
  }

  private _initializeMiddleware() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  private _connectToDB() {
    mongoose
      .connect(`${dbString}`)
      .then(() => {
        console.log("Database Connected!");
      })
      .catch((error) => {
        console.log("Error in connecting to database", error);
      });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App is running on the port ${this.port}`);
    });
  }
}
