import express from "express"
import * as userController from "../controllers/userController.js"

const router = express.Router()

router.get("/allUsers", userController.getAllUsers)
router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);


export default router
