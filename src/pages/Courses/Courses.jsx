import { useState, useEffect } from "react";
import { Card } from "../../components/CardCourse/Card";
import { getAllCourses } from "../../services/RESTFetch";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

export function Courses() {
  const [courses, setCourses] = useState([]);
  const token = Cookies.get("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesData = await getAllCourses(token);
        setCourses(coursesData);
      } catch (error) {
        console.error("Errore durante il recupero dei dati:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="marginFromHeader marginFromFooter">
        <Link to={"/courses/reg"}>
          <button className="m-2 btn btn-success">Crea un nuovo corso</button>
        </Link>
        <div className="d-flex flex-wrap justify-content-center">
          {courses.map(
            (
              {
                nomeCorso,
                durata,
                descrizioneBreve,
                descrizioneCompleta,
                idCategoria,
              },
              index
            ) => (
              <Card
                key={index}
                NomeCorso={nomeCorso}
                Durata={durata}
                DescrizioneBreve={descrizioneBreve}
                DescrizioneCompleta={descrizioneCompleta}
                IdCategoria={idCategoria}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}
