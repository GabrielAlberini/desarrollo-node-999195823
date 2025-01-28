import { Student } from "../models/studentModel.js";

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los estudiantes" });
  }
};

const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);

    if (!student) {
      return res.status(404).json({ message: "Estudiante no encontrado" });
    }

    res.json(student);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        message: "Error al obtener el estudiante",
        error: error.message,
      });
  }
};

const addStudent = async (req, res) => {
  try {
    const { body } = req;

    // Validar datos antes de guardar
    if (!body.name || !body.age || !body.course) {
      return res
        .status(400)
        .json({ message: "Todos los campos son obligatorios" });
    }

    const newStudent = new Student(body);
    await newStudent.save();

    return res
      .status(201)
      .json({ message: "Estudiante agregado exitosamente" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({
        message: "Error al agregar el estudiante",
        error: error.message,
      });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const updatedStudent = await Student.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updatedStudent) {
      return res.status(404).json({ message: "Estudiante no encontrado" });
    }

    res.json({
      message: "Estudiante actualizado exitosamente",
      updatedStudent,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        message: "Error al actualizar el estudiante",
        error: error.message,
      });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedStudent = await Student.findByIdAndDelete(id);

    if (!deletedStudent) {
      return res.status(404).json({ message: "Estudiante no encontrado" });
    }

    res.json({ message: "Estudiante eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        message: "Error al eliminar el estudiante",
        error: error.message,
      });
  }
};

export {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent,
};
