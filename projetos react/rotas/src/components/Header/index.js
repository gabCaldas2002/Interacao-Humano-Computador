import { Link } from "react-router-dom";
import './estilo.css';

function Header(){
    return(
        <header>
            <h2>Ciência da Computação</h2>
            <br/>
            <div>
            <Link to="/">Home </Link>
            <Link to="/sobre">Sobre </Link>
            <Link to="/contato">Contato </Link>
            <Link to="/produto">Produto </Link>
            </div>
        </header>
    );
}

export default Header;