import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { getAllStudents } from "../services/api";

const Home = () => {
  const [students, setStudents] = useState([]);

  const fetchingStudents = async () => {
    const data = await getAllStudents();
    setStudents(data);
  };

  useEffect(() => {
    fetchingStudents();
  }, []);

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <h1 className="title has-text-centered">Lista de Estudiantes</h1>

          {students.length > 0 ? (
            <div className="columns is-multiline">
              {students.map((student) => (
                <div key={student._id} className="column is-one-third">
                  <div className="card">
                    <div className="card-content">
                      <p className="title is-5">{student.name} - {student.age} años</p>
                      <p className="subtitle is-6">Curso: {student.course}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="has-text-centered">No hay estudiantes disponibles.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export { Home };
