import express, { Request, Response } from "express";
import { PATH } from "./config";
import { Server } from "socket.io";
import cors from "cors";
import http from "http";

class App {
  public app: express.Application;
  public port: any;
  private httpServer: http.Server;
  private webSocketServer: Server;

  constructor(controllers: any, port: any) {
    this.app = express();
    this.port = port;
    this.initializeMiddleware();
    this.initializeControllers(controllers);
    this.setupServer();
    this.setupWebSocket();
  }

  private initializeMiddleware() {
    this.app.use(cors());
  }

  private setupServer() {
    this.httpServer = http.createServer(this.app); // Create http server
    this.httpServer.listen(this.port, () => {
      // Listen using http server
      console.log(`HTTP server is running on port ${this.port}`);
    });
  }

  private setupWebSocket() {
    this.webSocketServer = new Server(this.httpServer, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true,
      },
    }); // Attach Socket.IO to http server
    this.webSocketServer.on("connection", (socket) => {
      console.log("WebSocket client connected",socket.id);
      socket.emit("hello","world")
    });
  }

  private initializeControllers(controllers: any) {
    controllers.forEach((controller) => {
      this.app.use(PATH, controller.router);
    });
  }
}

export default App;
