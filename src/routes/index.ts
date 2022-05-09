import { Router } from 'express';



class Routes {
  static define(indexRoute: Router): Router {
    indexRoute.get('/', (req, res) => {
      return res.send('Hello World')
    })

    return indexRoute
  }
}

export default Routes.define(Router())