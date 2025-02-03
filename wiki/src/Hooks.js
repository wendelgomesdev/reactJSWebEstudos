import React, { useState, useEffect, useMemo, useCallback } from 'react';

function Hooks() {
    
    // useState é um Hook que permite adicionar estados ao componente funcional
    // 'tarefas' armazena a lista de tarefas, e 'setTarefas' é a função para atualizar esse estado
    const [tarefas, setTarefas] = useState([]);

    // 'input' armazena o valor digitado no campo de texto, e 'setInput' o atualiza
    const [input, setInput] = useState('');

    /*
     * useEffect sem dependências (array vazio []) funciona como o componentDidMount
     * Ou seja, ele executa apenas uma vez, assim que o componente é montado.
     * Aqui, ele recupera a lista de tarefas do localStorage e define no estado.
     */
    useEffect(() => {
        const tarefasStorage = localStorage.getItem('tarefas');

        if (tarefasStorage) {
            setTarefas(JSON.parse(tarefasStorage)); // Converte de JSON para array e define no estado
        }
    }, []); // Executa apenas na montagem do componente

    /*
     * useEffect com 'tarefas' como dependência funciona como o componentDidUpdate
     * Ele será executado sempre que a variável 'tarefas' mudar.
     * Aqui, ele salva automaticamente as tarefas no localStorage sempre que são adicionadas/removidas.
     */
    useEffect(() => {
        if (tarefas.length > 0) { // Evita sobrescrever o localStorage caso o array esteja vazio
            localStorage.setItem('tarefas', JSON.stringify(tarefas)); // Converte para JSON e salva
        }
    }, [tarefas]); // Executa sempre que 'tarefas' for alterado

    /*
     * useCallback memoriza a função para evitar que ela seja recriada em cada renderização.
     * Ele recebe uma função e um array de dependências.
     * Aqui, ele impede que a função 'handleAdd' seja recriada a cada renderização.
     */
    const handleAdd = useCallback(() => {
        setTarefas([...tarefas, input]); // Adiciona a nova tarefa ao array de tarefas
        setInput(''); // Limpa o campo de input após adicionar a tarefa
    }, [input, tarefas]); // A função só será recriada se 'input' ou 'tarefas' mudar

    /*
     * useMemo memoriza o cálculo do número de tarefas para evitar processamento desnecessário.
     * Aqui, ele só será recalculado quando 'tarefas' for alterado.
     */
    const totalTarefas = useMemo(() => tarefas.length, [tarefas]); // Calcula a quantidade de tarefas

    return (
        <div>
            {/* Campo de input controlado */}
            <input 
                type='text' 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
            />
            
            {/* Botão para adicionar nova tarefa */}
            <button onClick={handleAdd}>Adicionar</button>

            <br />
            <br />

            {/* Exibe a quantidade total de tarefas */}
            <strong>Você tem {totalTarefas} tarefas.</strong>

            {/* Lista de tarefas renderizadas dinamicamente */}
            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa}>{tarefa}</li> // Cada item precisa de uma key única (aqui usamos o próprio valor)
                ))}
            </ul>
        </div>
    );
}

export default Hooks;
