import { Link, useNavigate } from "react-router-dom";
import { deleteUser } from "../../services/RESTFetch";

export function Card({ Nome, Cognome, Email, Ruoli, Token, fetchData }) {
  const navigateTo = useNavigate();

  const handleDeleteUser = async () => {
    if (await deleteUser(Token, Email)) {
      fetchData();
    }
  };
  return (
    <>
      <div className="card" style={{ width: "20rem", margin: "1rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {Nome} {Cognome}
          </h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{Ruoli}</h6>
          <p className="card-text">{Email}</p>
          <Link to={`/users/${Email}`} className="m-1 btn btn-info">
            Dettagli
          </Link>
          <button onClick={handleDeleteUser} className="m-1 btn btn-danger">
            Elimina
          </button>
        </div>
      </div>
    </>
  );
}
