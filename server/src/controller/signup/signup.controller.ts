import express from "express";
import { APP_ROUTES } from "../../core/appRoutes";
import { BaseController } from "../baseController";
import SignupService from "../../services/signupService.services";

export class SignupController extends BaseController {
  constructor(
    public path: APP_ROUTES.SIGNUP,
    public router = express.Router(),
    public service: SignupService = new SignupService()
  ) {
    super(path, router, service);
  }
}
