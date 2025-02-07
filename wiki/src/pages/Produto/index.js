import { useParams } from 'react-router-dom';

function Produto() {

    const { id } = useParams();

    return(
        <div>
            <h1>Página do produto</h1>
            <p>O ID do meu produto é {id}</p>
        </div>
    );
}

export default Produto;