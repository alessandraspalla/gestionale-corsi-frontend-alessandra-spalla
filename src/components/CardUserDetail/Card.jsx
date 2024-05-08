import { deleteUser } from "../../services/RESTFetch";
import { useNavigate } from "react-router-dom";

export function Card({ Nome, Cognome, Email, Ruoli, Token }) {
  const navigateTo = useNavigate();

  const handleDeleteUser = async () => {
    navigateTo("/users");
  };
  return (
    <>
      <div className="card p-4" style={{ maxWidth: "700px", margin: "1rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {Nome} {Cognome}
          </h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{Ruoli}</h6>
          <p className="card-text">{Email}</p>
          <button onClick={handleDeleteUser} className="btn btn-danger">
            Elimina
          </button>
        </div>
      </div>
    </>
  );
}
