import { port } from "./config";
import { App } from "./app";
import { SignupController } from "./controller/signup/signup.controller";
import { APP_ROUTES } from "./core/appRoutes";

const app = new App([new SignupController(APP_ROUTES.SIGNUP)], port);

app.listen();
