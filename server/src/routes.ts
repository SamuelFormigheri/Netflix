import express from 'express';
const routes = express.Router();

//#region CONTROLLERS
import CategoriesController from './controllers/CategoriesController';
import VideosController from './controllers/VideosController';

const categoriesController = new CategoriesController();
const videosController = new VideosController();
//#endregion

 
//#region CATEGORIES
routes.get("/categories", categoriesController.listCategories);
routes.get("/categories-videos", categoriesController.listCategoriesWithVideos);
routes.post("/categories", categoriesController.createCategory);
//#endregion

//#region VIDEOS
routes.post("/videos", videosController.createVideo);
routes.get("/videos", videosController.listVideos);
//#endregion

export default routes;