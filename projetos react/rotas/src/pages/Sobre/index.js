import { Link } from "react-router-dom";

function Sobre(){
    return(
        <div>
            <h1>Página sobre</h1>
            <br/>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/contato">Contato</Link>
            <br/>
            <Link to="/produto">Produto</Link>
        </div>
    );
}

export default Sobre;