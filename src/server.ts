import express from 'express'
import cors from 'cors'
import { json, urlencoded } from 'body-parser'
import { Server } from 'http';
import router from '@routes/index'



export class App {
  private server?: Server

  constructor(private port=3001, public app = express()){}

  public init(): void{
    this.setupExpress()
    this.setupRoutes()
    this.setupMiddleware()
  }

  private setupExpress() {
    this.app.use(cors())
    this.app.use(json())
    this.app.use(urlencoded({extended:true}))
  }

  private setupRoutes(): void {
    this.app.use(router)
  } 

  private setupMiddleware(): void {

  }

  public start():void {
    this.server = this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port} 🔥`)
    })
  }
}