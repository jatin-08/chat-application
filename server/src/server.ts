import App from "./app";
import { port } from "./config";
import { TestController } from "./controllers/test.controller";

const app = new App([new TestController('hello')], port);

