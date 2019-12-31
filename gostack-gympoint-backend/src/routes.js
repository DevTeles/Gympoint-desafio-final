import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import SessionController from './app/controllers/SessionController';
import SessionStudentController from './app/controllers/SessionStudentController';
import UserController from './app/controllers/UserController';
import StudentController from './app/controllers/StudentController';
import PackController from './app/controllers/PackController';
import EnrollController from './app/controllers/EnrollController';
import CheckinController from './app/controllers/CheckinController';
import HelpOrderController from './app/controllers/HelpOrderController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

routes.post('/students/:id/checkins', CheckinController.store);
routes.post('/students/:id/help-orders', HelpOrderController.store);
routes.post('/students/:id/files', upload.single('file'), FileController.store);
routes.post('/sessionsStudent', SessionStudentController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.delete('/users', UserController.delete);

routes.get('/students', StudentController.index);
routes.get('/students/:id', StudentController.find);
routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.update);
routes.delete('/students/:id', StudentController.delete);

routes.get('/students/checkins', CheckinController.index);
routes.get('/students/:id/checkins', CheckinController.show);

routes.get('/packs', PackController.index);
routes.get('/packs/:id', PackController.find);
routes.post('/packs', PackController.store);
routes.put('/packs/:id', PackController.update);
routes.delete('/packs/:id', PackController.delete);

routes.get('/enrolls', EnrollController.index);
routes.get('/enrolls/:id', EnrollController.find);
routes.post('/enrolls', EnrollController.store);
routes.put('/enrolls/:id', EnrollController.update);
routes.delete('/enrolls/:id', EnrollController.delete);

routes.get('/students/:id/help-orders', HelpOrderController.index);
routes.get('/help-orders', HelpOrderController.show);
routes.put('/help-orders/:id', HelpOrderController.update);
routes.post('/help-orders/:id/answer', HelpOrderController.store);

export default routes;
