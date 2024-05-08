export function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1
          style={{ fontSize: "3rem", color: "#FF5733", marginBottom: "20px" }}
        >
          Oops!
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#333", marginBottom: "10px" }}>
          La pagina che stai cercando non esiste.
        </p>
        <p style={{ fontSize: "1.2rem", color: "#333", marginBottom: "10px" }}>
          Potresti aver digitato un indirizzo errato o la pagina potrebbe essere
          stata rimossa.
        </p>
      </div>
    </div>
  );
}
