// api.js estará encargado de ejecutar las funciones del backend
import axios from "axios";

const BASE_URL_API = "http://localhost:3001/api/students";

// Obtener todos los estudiantes
const getAllStudents = async () => {
  try {
    const response = await axios.get(BASE_URL_API);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Agregar un estudiante
const addStudent = async (student) => {
  try {
    const response = await axios.post(BASE_URL_API, student);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Modificar un estudiante
const updateStudent = async (id, student) => {
  try {
    const response = await axios.patch(`${BASE_URL_API}/${id}`, student);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Eliminar un estudiante
const deleteStudent = async (id) => {
  try {
    await axios.delete(`${BASE_URL_API}/${id}`);
  } catch (error) {
    console.error(error);
  }
};

export { getAllStudents, addStudent, updateStudent, deleteStudent };
