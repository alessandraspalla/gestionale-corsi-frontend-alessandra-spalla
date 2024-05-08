export function Card({
  NomeCorso,
  Durata,
  DescrizioneBreve,
  DescrizioneCompleta,
  IdCategoria,
}) {
  const getCategoryName = (id) => {
    switch (id) {
      case 1:
        return "Frontend";
      case 2:
        return "Backend";
      case 3:
        return "FullStack";
      case 4:
        return "CyberSecurity";
      default:
        return "";
    }
  };
  return (
    <>
      <div className="card" style={{ width: "20rem", margin: "1rem" }}>
        <div className="card-body">
          <h5 className="card-title">{NomeCorso}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {Durata} ore - {getCategoryName(IdCategoria)}
          </h6>
          <p className="card-text">{DescrizioneBreve}</p>
          <p className="card-text">{DescrizioneCompleta}</p>
        </div>
      </div>
    </>
  );
}
