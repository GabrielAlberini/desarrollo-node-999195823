// inicializar el servidor

import express from "express"
import { studentRouter } from "./routes/studentRoutes.js"
import { teacherRouter } from "./routes/teacherRoutes.js"

const app = express()

app.use("/api/students", studentRouter)
app.use("/api/teachers", teacherRouter)

app.listen(3001, () => {
  console.log("El servidor está en escucha en el puerto http://localhost:3000")
})