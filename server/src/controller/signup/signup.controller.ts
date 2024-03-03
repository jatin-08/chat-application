import express from "express";
import { APP_ROUTES } from "../../core/appRoutes";
import { BaseController } from "../baseController";

export class SignupController extends BaseController{
    constructor(public path: APP_ROUTES.SIGNUP, public router = express.Router()){
        super(path, router)
    }
}