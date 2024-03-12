import { port } from "./config";
import { App } from "./app";
import { SignupController } from "./controller/signup/signup.controller";
import { APP_ROUTES } from "./core/appRoutes";
import { LoginController } from "./controller/login/login.controller";

const app = new App([new LoginController(APP_ROUTES.LOGIN),new SignupController(APP_ROUTES.SIGNUP)], port);

app.listen();
