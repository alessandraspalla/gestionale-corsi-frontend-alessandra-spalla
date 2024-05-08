export function Home() {
  return (
    <div
      className="container-fluid vh-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div className="card text-center p-5" style={{ maxWidth: "700px" }}>
        <div className="card-body">
          <h1 className="card-title mb-5">Benvenuto al Gestionale Corsi</h1>
          <p className="card-text">
            Per iniziare a goderti l'esperienza, effettua il login o la
            registrazione.
          </p>
        </div>
      </div>
    </div>
  );
}
