import { Router } from "express"
import { getAllTeachers } from "../controllers/teachersControllers.js"

const teacherRouter = Router()

teacherRouter.get("/", getAllTeachers)

export { teacherRouter }