import { Link } from "react-router-dom";

function Home(){
    return (
        <div>
            <h1>Bem-vindo a página HOME</h1>
            <span>Gabriel Caldas</span>
            <br/>
            <Link to="/sobre">Sobre </Link>
            <br/>
            <Link to="/contato">Contato </Link>
            <br/>
            <Link to="/produto">Produto </Link>
        </div>
    );
}

export default Home;