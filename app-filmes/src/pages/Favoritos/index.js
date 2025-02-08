import './style.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast }from 'react-toastify';

function Favoritos() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem('@primeflix');
        setFilmes(JSON.parse(minhaLista) || []);
    }, []);

    function removerFilme(id) {
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id);
        });

        setFilmes(filtroFilmes);
        localStorage.setItem('@primeflix', JSON.stringify(filtroFilmes));
        toast.success('Filme removido com sucesso!', {
                    position: 'bottom-right',
                  })
    }

    return (
        <div id='meus-filmes'>
            <h1>Meus Filmes</h1>
            
            { filmes.length === 0 && <p id='aviso-zero-filmes'>Você não possui nenhum filme em sua lista de favoritos. 🙁</p>}
            <ul id='lista-filmes-favoritos'>
                {filmes.map((item) => {
                    return (
                        <li key={item.id}>
                            <p>{item.title}</p>
                            <div id='botoes-acoes'>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button onClick={() => removerFilme(item.id)}>Remover</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Favoritos;