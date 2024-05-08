import { NavLink } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Cookies from "js-cookie";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Header() {
  const { userContext, setUserContext } = useContext(AuthContext);
  const navigateTo = useNavigate();

  const handleLogout = () => {
    setUserContext({
      nome: "",
      cognome: "",
      email: "",
      ruoli: [],
      isLogged: false,
    });
    Cookies.remove("token");
    navigateTo("/login");
  };

  return (
    <nav
      className="navbar fixed-top navbar-expand-lg bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link" aria-current="page">
                Home
              </NavLink>
            </li>
            {userContext.isLogged ? (
              <>
                <li className="nav-item">
                  <NavLink to={"/courses"} className="nav-link">
                    Corsi
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/users" className="nav-link">
                    Utenti
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button onClick={handleLogout} className="nav-link">
                    <NavLink to="/">Logout</NavLink>
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/register" className="nav-link">
                    Registrati
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
