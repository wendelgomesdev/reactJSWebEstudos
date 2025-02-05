import { Link } from "react-router-dom";
import './style.css';

function Header() {
    return(
        <header id="cabecalho">
            <h2>Astolfo's Company</h2>
            <div className="menu">
                <Link to='/'>Home</Link>
                <Link to='/sobre'>Sobre</Link>
            </div>
        </header>
    );
}

export default Header;