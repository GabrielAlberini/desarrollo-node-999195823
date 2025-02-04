import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { getAllStudents, addStudent, updateStudent, deleteStudent } from "../services/api";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({ name: "", age: "", course: "" });
  const [editingId, setEditingId] = useState(null); // Para saber si estamos editando

  // Obtener estudiantes al montar el componente
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const data = await getAllStudents();
    setStudents(data);
  };

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await updateStudent(editingId, formData);
    } else {
      await addStudent(formData);
    }
    setFormData({ name: "", age: "", course: "" });
    setEditingId(null);
    fetchStudents();
  };

  // Cargar datos en el formulario para editar
  const handleEdit = (student) => {
    setFormData({ name: student.name, age: student.age, course: student.course });
    setEditingId(student._id);
  };

  // Eliminar un estudiante
  const handleDelete = async (id) => {
    if (confirm("¿Estas seguro que quieres borrar al estudiante?")) {
      await deleteStudent(id);
      fetchStudents();
    }
  };

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <h1 className="title has-text-centered">Dashboard de Estudiantes</h1>

          {/* Formulario para agregar/modificar */}
          <div className="box">
            <h2 className="subtitle">{editingId ? "Editar Estudiante" : "Agregar Estudiante"}</h2>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">Nombre</label>
                <div className="control">
                  <input className="input" type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
              </div>

              <div className="field">
                <label className="label">Edad</label>
                <div className="control">
                  <input className="input" type="number" name="age" value={formData.age} onChange={handleChange} required />
                </div>
              </div>

              <div className="field">
                <label className="label">Curso</label>
                <div className="control">
                  <input className="input" type="text" name="course" value={formData.course} onChange={handleChange} required />
                </div>
              </div>

              <div className="control">
                <button type="submit" className={`button ${editingId ? "is-warning" : "is-primary"}`}>
                  {editingId ? "Actualizar" : "Agregar"}
                </button>
              </div>
            </form>
          </div>

          {/* Tabla de estudiantes */}
          {students.length > 0 ? (
            <table className="table is-fullwidth is-striped is-hoverable mt-4">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Edad</th>
                  <th>Curso</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student._id}>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.course}</td>
                    <td>
                      <button className="button is-small is-warning mr-2" onClick={() => handleEdit(student)}>Editar</button>
                      <button className="button is-small is-danger" onClick={() => handleDelete(student._id)}>Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="has-text-centered mt-4">No hay estudiantes registrados.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export { Dashboard };
