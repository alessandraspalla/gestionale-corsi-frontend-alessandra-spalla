import React, { useState } from "react";
import { userRegister } from "../../services/RESTFetch";
import {
  validateNome,
  validateCognome,
  validateEmail,
  validatePassword,
} from "../../services/ValidationService";

export function Registration() {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    nome: "",
    cognome: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { nome, cognome, email, password } = formData;

    const newFormErrors = {
      nome: validateNome(nome) ? "" : "Nome non valido",
      cognome: validateCognome(cognome) ? "" : "Cognome non valido",
      email: validateEmail(email) ? "" : "Email non valida",
      password: validatePassword(password) ? "" : "Password non valida",
    };

    setFormErrors(newFormErrors);

    if (Object.values(newFormErrors).every((error) => error === "")) {
      if ((await userRegister(formData)).ok) {
        console.log("sono nell'if");

        setFormData({
          nome: "",
          cognome: "",
          email: "",
          password: "",
        });

        console.log(formData);

        setFormErrors({
          nome: "",
          cognome: "",
          email: "",
          password: "",
        });

        console.log(formErrors);
      }
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
            className={`form-control ${formErrors.nome && "is-invalid"}`}
            id="nome"
            name="nome"
            placeholder=""
            value={formData.nome}
            onChange={handleChange}
          />
          <label htmlFor="nome">Nome</label>
          {formErrors.nome && (
            <div className="text-danger">{formErrors.nome}</div>
          )}
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className={`form-control ${formErrors.cognome && "is-invalid"}`}
            id="cognome"
            name="cognome"
            placeholder=""
            value={formData.cognome}
            onChange={handleChange}
          />
          <label htmlFor="cognome">Cognome</label>
          {formErrors.cognome && (
            <div className="text-danger">{formErrors.cognome}</div>
          )}
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className={`form-control ${formErrors.email && "is-invalid"}`}
            id="email"
            name="email"
            placeholder=""
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          {formErrors.email && (
            <div className="text-danger">{formErrors.email}</div>
          )}
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className={`form-control ${formErrors.password && "is-invalid"}`}
            id="password"
            name="password"
            placeholder=""
            value={formData.password}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          {formErrors.password && (
            <div className="text-danger">{formErrors.password}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Registrati
        </button>
      </form>
    </div>
  );
}
