import { Router } from "express";
import {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/studentsControllers.js";

const studentRouter = Router();

// Obtener todos los estudiantes
// GET /
studentRouter.get("/", getAllStudents);

// Obtener un estudiante mediante su id
// GET /:id
studentRouter.get("/:id", getStudentById);

// Agregar un nuevo estudiante
// POST /
studentRouter.post("/", addStudent);

// Actualizar un estudiante (parcialmente o completamente)
// PATCH /:id
studentRouter.patch("/:id", updateStudent);

// Borrar un estudiante
// DELETE /:id
studentRouter.delete("/:id", deleteStudent);

export { studentRouter };
