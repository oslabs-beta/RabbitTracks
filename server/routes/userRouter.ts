import { AuthController, UserController } from '../../types';
import express, { Request, Response } from 'express';

const authController: AuthController = require('../controllers/authController');
const userController: UserController = require('../controllers/userController');

const router = express.Router();

router.get(
  '/get-all-user-projects',
  authController.verifySession,
  userController.getAllUserProjects,
  (req: Request, res: Response) => {
    return res.status(200).json(res.locals.userprojects);
  }
);

router.post(
  '/addproject',
  authController.verifySession,
  userController.addProject,
  (req: Request, res: Response) => {
    return res.status(200).send('New Project Added!');
  }
);

module.exports = router;
