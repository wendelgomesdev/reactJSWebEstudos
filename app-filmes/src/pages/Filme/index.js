import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast }from 'react-toastify';
import api from "../../services/api";
import './style.css';

function Filme() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme(params) {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: '5af2a70106a0303e030547cf9572241f',
                    language: 'pt-BR'
                }
            })
                .then((response) => {
                    setFilme(response.data);
                    setLoading(false);
                })
                .catch(() => {
                    navigate('/', { replace: true })
                    return;
                })
        }

        loadFilme();

        return () => {

        }

    }, [id, navigate]);

    function salvarFilme() {
        const minhaLista = localStorage.getItem('@primeflix');
        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmesSalvos) => filmesSalvos.id === filme.id);

        if (hasFilme) {
            toast.warn('Esse filme já está em sua lista!', {
                position: 'bottom-right',
              });
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem('@primeflix', JSON.stringify(filmesSalvos));
        toast.success('Filme salvo com sucesso!', {
            position: 'bottom-right',
          });
    }

    if (loading) {
        return (
            <div id="filme-info">
                <h1>Carregando detalhes...</h1>
            </div>
        );
    }

    return (
        <div id="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`} alt={filme.title} />
            <h3>Sinopse:</h3>
            <p>{filme.overview}</p>
            <strong>Avaliação: {filme.vote_average.toFixed(1)} / 10</strong>

            <div id="area-buttons">
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a href={`https://youtube.com/results?search_query=${filme.title}`} rel='external' target='blank'>Trailer</a>
                </button>
            </div>
        </div>
    );
}

export default Filme;