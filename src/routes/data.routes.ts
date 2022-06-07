import express, { IRouter } from 'express';
import { DataController } from '../controller/Data.controller';
import { IRouterCustom } from '../core/interface/router.interface';

const dataController = new DataController();

export class DataRouter implements IRouterCustom {
  getRouter(): IRouter {
    const recipeRouter = express.Router();

    recipeRouter.route('/data').get(dataController.getAll).post(dataController.post);

    recipeRouter
      .route('/data/:id')
      .get(dataController.getOne)
      .put(dataController.put)
      .delete(dataController.delete);

    return recipeRouter;
  }
}
