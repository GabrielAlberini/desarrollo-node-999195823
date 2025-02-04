import { Layout } from "../components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <section className="section">
        <div className="container has-text-centered">
          <h1 className="title is-1 has-text-danger">404</h1>
          <p className="subtitle is-4">Página no encontrada</p>
          <a href="/" className="button is-primary mt-4">
            Volver al inicio
          </a>
        </div>
      </section>
    </Layout>
  );
};

export { NotFound };
