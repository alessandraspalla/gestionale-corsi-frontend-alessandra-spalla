import { useState, useEffect } from "react";
import { Card } from "../../components/CardUser/Card";
import { getAllUsers } from "../../services/RESTFetch";
import Cookies from "js-cookie";

export function Users() {
  const [users, setUsers] = useState([]);
  const token = Cookies.get("token");

  const fetchData = async () => {
    try {
      const usersData = await getAllUsers(token);
      console.log("dati dalla fetch", usersData);
      setUsers(usersData);
    } catch (error) {
      console.error("Errore durante il recupero dei dati:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center marginFromHeader marginFromFooter">
      {users.map(({ nome, cognome, email, ruoli }, index) => (
        <Card
          key={index}
          Nome={nome}
          Cognome={cognome}
          Email={email}
          Ruoli={ruoli}
          Token={token}
          fetchData={fetchData}
        />
      ))}
    </div>
  );
}
