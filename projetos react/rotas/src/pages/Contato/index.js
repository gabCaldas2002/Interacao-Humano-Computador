import { Link } from "react-router-dom";

function Contato(){
    return(
        <div>
            <h1>Página contato</h1>
            <p>Contato: (ddd)xxxxx-xxxx</p>
            <br/>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/sobre">Sobre</Link>
            <br/>
            <Link to="/produto">Produto</Link>
        </div>
    );
}

export default Contato;