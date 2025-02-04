import Teacher from "../models/teacherModel.js"

const getAllTeachers = (req, res) => {
  const teachers = Teacher.getAllTeachers()
  res.json(teachers)
}

export { getAllTeachers }