import express from "express";
import { APP_ROUTES } from "../../core/appRoutes";
import { BaseController } from "../baseController";
import LoginService from "../../services/login.services";
import validationFDMiddleware from "../../middleware/validationFormMiddleware";
import { NextFunction } from "express-serve-static-core";
import { ResponseCode } from "../../config";

export class LoginController extends BaseController {
    constructor(public path: APP_ROUTES.LOGIN, public router = express.Router(), public service: LoginService = new LoginService()) {
        super(path, router, service);
    }

    public _initializeRoutes(): void {
        this.router.post(`${this.path}/login`, validationFDMiddleware(this.dto), this.login.bind(this));
    }

    protected login(req: express.Request, res: express.Response, _next: NextFunction) {
        const data = req.body;
        this.service.login(data)
            .then((data) => {
                this.sendResponse('success', null, data)
                res.status(ResponseCode.SUCCESS).json(this.genericResponse)
            })
            .catch((error) => {
                this.sendResponse('failure', error, null)
                res.status(ResponseCode.BAD_REQUEST).json(this.genericResponse)
            });
    }
}
