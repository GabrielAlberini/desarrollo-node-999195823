import mongoose from "mongoose";

// Definimos el esquema para los estudiantes
const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
      min: 0,
    },
    course: {
      type: String,
      required: true,
      default: "Other",
    },
  },
  {
    versionKey: false,
  }
);

// Creamos el modelo basado en el esquema
const Student = mongoose.model("Student", studentSchema);

export { Student };
