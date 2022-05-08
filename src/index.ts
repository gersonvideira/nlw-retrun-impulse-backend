import { App } from "./server";

class Server {
  static start(): void {
    const application = new App(3001)
    application.init()
    application.start()
  }
}
Server.start()