import express from "express";
import { APP_ROUTES } from "../core/appRoutes";
import BaseService from "../services/baseService.services";
import validationFDMiddleware from "../middleware/validationFormMiddleware";
import { authmiddleware } from "../middleware/authmiddleware";
import { GenericResponse } from "../core/genericResponse";

export abstract class BaseController {
  dto: any
  constructor(public path: APP_ROUTES, public router = express.Router(),
    public service: BaseService, public genericResponse: GenericResponse<any> = new GenericResponse<any>()) {
    this.dto = this.service.getDto();
    this._initializeRoutes();
  }

  public _initializeRoutes(): void {
    this.router.get(`${this.path}/getall`, authmiddleware, this.getData.bind(this));
    this.router.post(`${this.path}/add`, validationFDMiddleware(this.dto), this.postData.bind(this));
  }

  protected getData(req: express.Request, res: express.Response, _next: express.NextFunction) {
    this.service
      .getData()
      .then((data) => {
        this.sendResponse('success', null, data)
        res.send(this.genericResponse)
      })
      .catch((error) => {
        this.sendResponse('failure', error, null)
        res.send(this.genericResponse)
      });
  }

  protected postData(req: express.Request, res: express.Response, _next: express.NextFunction) {
    const data = req.body;
    this.service
      .createRecord(data, null)
      .then((data) => {
        this.sendResponse('success', null, data)
        res.send(this.genericResponse)
      })
      .catch((error) => {
        this.sendResponse('failure', error, null)
        res.send(this.genericResponse)
      });
  }

  public sendResponse(status: string, error: string, data: any): GenericResponse<any> {
    this.genericResponse.setStatus(status);
    this.genericResponse.setError(error);
    this.genericResponse.setData(data);
    return this.genericResponse;
  }

}
