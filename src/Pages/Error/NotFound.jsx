import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div className="not-found">
      <h1>404!</h1>
      <p>PAGINA NÃO ENCONTRADA</p>
      <Link to={"/"}>Acessar Filmes</Link>
    </div>
  );
}

export default Notfound;
