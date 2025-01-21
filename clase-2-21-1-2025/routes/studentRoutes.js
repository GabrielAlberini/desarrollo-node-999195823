// validar las rutas

import { Router } from "express"
import { getAllStudents } from "../controllers/studentsControllers.js"

const studentRouter = Router()

// obtener todos los estudiantes
// request - response
studentRouter.get("/", getAllStudents)

// obtener un estudiante mediante su id

// agregar un nuevo estudiante

// actualizar un nuevo estudiante

// borrar un estudiante

export { studentRouter }