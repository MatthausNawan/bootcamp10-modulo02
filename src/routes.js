import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import UsersController from './app/controllers/UsersController';
import ProvidersController from './app/controllers/ProvidersController';
import SessionsController from './app/controllers/SessionsController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);
routes.post('/users', UsersController.store);
routes.post('/sessions', SessionsController.store);

routes.use(authMiddleware);
routes.get('/providers', ProvidersController.index);
routes.put('/users', UsersController.update);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
