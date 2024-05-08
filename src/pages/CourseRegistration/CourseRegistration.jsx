import { useState } from "react";
import { courseRegistration } from "../../services/RESTFetch";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export function CourseRegistration() {
  const token = Cookies.get("token");
  const navigateTo = useNavigate();
  const [formData, setFormData] = useState({
    nomeCorso: "",
    durata: "",
    descrizioneBreve: "",
    descrizioneCompleta: "",
    idCategoria: 0,
  });

  const [selectedCategoria, setSelectedCategoria] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChangeSelect = (e) => {
    setSelectedCategoria(e.target.value);
    setFormData({ ...formData, idCategoria: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((await courseRegistration(token, formData)).ok) {
      setFormData({
        nomeCorso: "",
        durata: "",
        descrizioneBreve: "",
        descrizioneCompleta: "",
        idCategoria: 0,
      });
      navigateTo("/courses");
    }
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <form
        className="w-50 p-5 rounded border border-dark-subtle"
        onSubmit={handleSubmit}
      >
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="nomeCorso"
            name="nomeCorso"
            placeholder=""
            value={formData.nomeCorso}
            onChange={handleChange}
          />
          <label htmlFor="nomeCorso">Nome Corso</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="durata"
            name="durata"
            placeholder=""
            value={formData.durata}
            onChange={handleChange}
          />
          <label htmlFor="durata">Durata In Ore</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="descrizioneBreve"
            name="descrizioneBreve"
            placeholder=""
            value={formData.descrizioneBreve}
            onChange={handleChange}
          />
          <label htmlFor="descrizioneBreve">Descrizione Breve</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            id="descrizioneCompleta"
            name="descrizioneCompleta"
            placeholder=""
            value={formData.descrizioneCompleta}
            onChange={handleChange}
            rows={4}
          />
          <label htmlFor="descrizioneCompleta">Descrizione Completa</label>
        </div>

        <div className="form-floating mb-3">
          <select
            className="form-select"
            id="idCategoria"
            name="idCategoria"
            value={selectedCategoria}
            onChange={handleChangeSelect}
          >
            <option value="1">FrontEnd</option>
            <option value="2">BackEnd</option>
            <option value="3">FullStack</option>
            <option value="4">Cybersecurity</option>
          </select>
          <label htmlFor="idCategoria">Categoria</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Registrati
        </button>
      </form>
    </div>
  );
}
