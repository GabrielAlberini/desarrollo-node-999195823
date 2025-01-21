// recibe la info del cliente y le responde

import Student from "../models/studentModel.js"

const getAllStudents = (req, res) => {
  const students = Student.getAllStudents()
  res.json(students)
}

export { getAllStudents }