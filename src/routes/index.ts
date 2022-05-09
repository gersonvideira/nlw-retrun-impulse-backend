import { Router } from 'express';
import FeedbackRoutes from './feedback.routes';



class Routes {
  static define(indexRoute: Router): Router {
    indexRoute.get('/', (req, res) => {
      return res.send('Hello World')
    })

    indexRoute.use(FeedbackRoutes)

    
    return indexRoute
  }
}

export default Routes.define(Router())