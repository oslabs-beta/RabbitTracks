import { AuthController, UserController } from "../../types";
import express, { Request, Response } from "express";

const authController: AuthController = require("../controllers/authController");
const userController: UserController = require("../controllers/userController");

const router = express.Router();

// Get all user projects endpoint
router.get(
  "/get-all-user-projects",
  authController.verifySession,
  userController.getAllUserProjects,
  (req: Request, res: Response) => {
    return res.status(200).json(res.locals.userprojects);
  }
);

// Add project endpoint
router.post(
  "/addproject",
  authController.verifySession,
  userController.addProject,
  (req: Request, res: Response) => {
    return res.status(200).send("New Project Added!");
  }
);

router.get(
  "/get-all-users",
  userController.getAllUsers,
  (_req: Request, res: Response) => {
    return res.status(200).send(res.locals.allusers);
  }
);

// Successfully deletes users with no projects attached to them
router.delete(
  "/deleteuser/:email",
  userController.deleteUser,
  (_req: Request, res: Response) => {
    return res
      .status(200)
      .send(res.locals.deleteduser || "User not found - nothing happened");
  }
);

module.exports = router;
