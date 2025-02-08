import { Link } from 'react-router-dom';
import './style.css';

function Erro404() {
    return(
        <div id='not-found'>
            <h1>Erro 404</h1>
            <p>Não encontramos a página a que você tentou acessar.</p>
            <Link to='/'>Veja todos os filmes</Link>
        </div>
    );
}

export default Erro404;