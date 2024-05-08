export const validateNome = (nome) => {
  const regex = /^[a-zA-Z\s']{1,50}$/;
  return nome.match(regex) !== null;
};

export const validateCognome = (cognome) => {
  const regex = /^[a-zA-Z\s']{1,50}$/;
  return cognome.match(regex) !== null;
};

export const validateEmail = (email) => {
  const regex = /^[A-Za-z0-9\.\+_-]+@[A-Za-z0-9\._-]+\.[A-Za-z]{2,6}$/;
  return email.match(regex) !== null;
};

export const validatePassword = (password) => {
  const regex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/;
  return password.match(regex) !== null;
};
