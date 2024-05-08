import { toast } from "react-toastify";
import Cookies from "js-cookie";
import {
  userRegistrationURL,
  userLoginURL,
  allCoursesURL,
  allUsersURL,
  getUserDetail,
  courseRegistrationURL,
} from "./RESTConfig";

export async function userRegister(user) {
  const jsonBody = JSON.stringify(user);

  try {
    const res = await fetch(userRegistrationURL, {
      mode: "cors",
      method: "POST",
      body: jsonBody,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      toast.success(
        "Registrazione avvenuta con successo! Adesso effettua la login per iniziare a navigare nella dashboard",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    } else {
      toast.error("Si è verificato un errore durante la registrazione.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    return res;
  } catch (error) {
    console.error("Errore durante la registrazione:", error);
    toast.error("Si è verificato un errore durante la registrazione.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    throw error;
  }
}

export async function userLogin(user) {
  const jsonBody = JSON.stringify(user);

  try {
    const res = await fetch(userLoginURL, {
      mode: "cors",
      method: "POST",
      body: jsonBody,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      toast.success("Login avvenuta con successo!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      const tokenResponse = await res.json();
      const token = tokenResponse.token;
      Cookies.set("token", token);

      return token;
    } else {
      toast.error("Si è verificato un errore durante la login.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  } catch (error) {
    console.error("Errore durante la login:", error);
    toast.error("Si è verificato un errore durante la login.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    throw error;
  }
}

export async function getAllCourses(token) {
  const listCourses = [];
  try {
    const res = await fetch(allCoursesURL, {
      mode: "cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      const coursesResponse = await res.json();
      listCourses.push(...coursesResponse);
      return listCourses;
    } else {
      toast.error("Si è verificato un errore durante il recupero dei dati.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  } catch (error) {
    console.error("Errore durante il recupero dei dati:", error);
    toast.error("Si è verificato un errore durante il recupero dei dati.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    throw error;
  }
}

export async function getAllUsers(token) {
  try {
    const res = await fetch(allUsersURL, {
      mode: "cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      const usersData = await res.json();
      const formattedUsers = usersData.map((user) => ({
        id: user.id,
        nome: user.nome,
        cognome: user.cognome,
        email: user.email,
        ruoli: user.ruoli.map((ruolo) => ruolo.tipologia).join(", "),
      }));
      return formattedUsers;
    } else {
      toast.error("Si è verificato un errore durante il recupero dei dati.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return [];
    }
  } catch (error) {
    console.error("Errore durante il recupero dei dati:", error);
    toast.error("Si è verificato un errore durante il recupero dei dati.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    throw error;
  }
}

export async function getUserDetails(token, email) {
  try {
    const url = `${getUserDetail}${email}`;
    console.log(url);
    const res = await fetch(url, {
      mode: "cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      const userData = await res.json();
      const formattedUser = {
        id: userData.id,
        nome: userData.nome,
        cognome: userData.cognome,
        email: userData.email,
        ruoli: userData.ruoli.map((ruolo) => ruolo.tipologia).join(", "),
      };
      return formattedUser;
    } else {
      toast.error("Si è verificato un errore durante il recupero dei dati.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return null;
    }
  } catch (error) {
    console.error("Errore durante il recupero dei dati:", error);
    toast.error("Si è verificato un errore durante il recupero dei dati.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    throw error;
  }
}

export async function deleteUser(token, email) {
  try {
    const url = `http://localhost:8080/api/user/${email}`;
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      toast.success("Utente eliminato con successo.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return true;
    } else {
      toast.error(
        "Si è verificato un errore durante l'eliminazione dell'utente.",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      console.error(
        "Errore durante l'eliminazione dell'utente:",
        res.status,
        res.statusText
      );
      return false;
    }
  } catch (error) {
    toast.error(
      "Si è verificato un errore durante l'eliminazione dell'utente.",
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    console.error("Errore durante l'eliminazione dell'utente:", error);
    return false;
  }
}

export async function courseRegistration(token, course) {
  const jsonBody = JSON.stringify(course);

  try {
    const res = await fetch(courseRegistrationURL, {
      mode: "cors",
      method: "POST",
      body: jsonBody,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      toast.success("Creazione del corso avvenuta con successo!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Si è verificato un errore durante la creazione del corso.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    return res;
  } catch (error) {
    console.error("Errore durante la creazione del corso:", error);
    toast.error("Si è verificato un errore durante la creazione del corso.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    throw error;
  }
}
