// inicializar el servidor
import express from "express";
import { studentRouter } from "./routes/studentRoutes.js";
import { teacherRouter } from "./routes/teacherRoutes.js";
import { connectDB } from "./config/connectDB.js";
import cors from "cors"

process.loadEnvFile();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors())

// http://localhost:3001/api/students/
app.use("/api/students", studentRouter);
app.use("/api/teachers", teacherRouter);

app.listen(PORT, () => {
  console.log("El servidor está en escucha en el puerto http://localhost:" + PORT);
  connectDB();
});
