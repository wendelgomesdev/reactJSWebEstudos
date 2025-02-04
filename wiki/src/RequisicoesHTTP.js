import React, { useState, useEffect } from 'react';
import './estilo_RequisicoesHTTP.css'

function RequisicoesHTTP() {
    
    const [nutri, setNutri] = useState([]);

    useEffect(() => {
        function loadAPI(){
            let URL = 'https://sujeitoprogramador.com/rn-api/?api=posts';

            fetch(URL)
            .then((reponse) => reponse.json())
            .then((json) => {
                setNutri(json);
            });
        }

        loadAPI();

    }, []);

    return (
        <div className='container'>
            <header id='cabecalho'>
                <strong>React Nutri</strong>
            </header>
            {nutri.map((item) => {
                return(
                    <article key={item.id} className='post'>
                        <strong className='titulo'>{item.titulo}</strong>
                        <img src={item.capa} alt={item.titulo} />
                        <p className='subtitulo'>
                            {item.subtitulo}
                        </p>
                        <strong>Categoria: {item.categoria}</strong>
                        <a className='botaoContinuar'>Acessar</a>
                    </article>
                );
            })}
        </div>
    );
}

export default RequisicoesHTTP;
