import express from "express";
import { APP_ROUTES } from "../core/appRoutes";

export class BaseController {
  constructor(public path: APP_ROUTES, public router = express.Router()) {
    this._initializeRoutes();
  }

  public _initializeRoutes(): void {
    this.router.get(`${this.path}/getall`, this.getData.bind(this));
    this.router.post(`${this.path}/add`, this.postData.bind(this))
  }

  protected getData(
    req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) {
    res.json("hello");
  }

  protected postData(req:express.Request, res:express.Response, _next:express.NextFunction){
    const data = req.body;
    console.log("_________data_________",data);
    
    res.json(data)
  }
}
