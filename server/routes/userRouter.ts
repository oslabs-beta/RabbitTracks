import { AuthController, UserController } from "../../types";
import express, { Request, Response } from "express"

const authController: AuthController = require("../controllers/authController");
const userController: UserController = require("../controllers/userController")

const router = express.Router()

router.post('/addproject',
  authController.verifySession,
  userController.addProject,
  (req: Request, res: Response) => {
    return res.status(200).send('New Project Added!');
  }
)

module.exports = router