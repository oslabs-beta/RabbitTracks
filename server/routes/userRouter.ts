import express, {Request, Response} from "express"
const router = express.Router()

const userController = require("../controllers/userController");

router.get(
  "/get-all-user-projects",
  authController.verifySession,
  userController.getAllUserProjects,
  (req: Request, res: Response) => {
    return res.status(200).json(res.locals.userprojects);
  }
);

module.exports = router;