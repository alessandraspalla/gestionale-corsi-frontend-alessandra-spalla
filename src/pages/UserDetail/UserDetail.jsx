import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/CardUserDetail/Card";
import { getUserDetails } from "../../services/RESTFetch";
import Cookies from "js-cookie";

export function UserDetail() {
  const { email } = useParams();
  const [user, setUser] = useState({});
  const token = Cookies.get("token");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserDetails(token, email);
        setUser(userData);
      } catch (error) {
        console.error(
          "Errore durante il recupero dei dati dell'utente:",
          error
        );
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h1 className="marginFromHeader marginFromFooter">Dettagli Utente</h1>
      <Card
        Nome={user.nome}
        Cognome={user.cognome}
        Email={user.email}
        Ruoli={user.ruoli}
        Token={token}
      />
    </div>
  );
}
