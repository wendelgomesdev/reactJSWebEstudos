import './style.css';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header id="cabecalho">
            <Link id='logo' to='/'>Prime Flix</Link>
            <Link id='favoritos' to='/favoritos'>Meus Filmes</Link>
        </header>
    );
}

export default Header;