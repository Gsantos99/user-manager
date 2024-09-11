import express from "express"
import * as userController from "../controllers/userController.js"

const router = express.Router()

router.get("/allUsers", userController.getAllUsers)

export default router
