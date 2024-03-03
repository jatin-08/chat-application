import express from "express";
import { APP_ROUTES } from "../core/appRoutes";
import BaseService from "../services/baseService.services";

export abstract class BaseController {
  constructor(
    public path: APP_ROUTES,
    public router = express.Router(),
    public service: BaseService
  ) {
    this._initializeRoutes();
  }

  public _initializeRoutes(): void {
    this.router.get(`${this.path}/getall`, this.getData.bind(this));
    this.router.post(`${this.path}/add`, this.postData.bind(this));
  }

  protected getData(
    req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) {
    this.service
      .getData()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  protected postData(
    req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) {
    const data = req.body;
    this.service
      .createRecord(data, null)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }
}