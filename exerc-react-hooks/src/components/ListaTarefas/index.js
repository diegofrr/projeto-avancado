import React, { useState } from 'react';
import './listaTarefas.css'
import Tarefa from '../Tarefa';

function ListaTarefas() {
    const [listaTarefas, setListaTarefas] = useState([])
    const [input, setInput] = useState('')

    return (
        <div className='tarefas-container'>
            <p className='titulo'>Lista de tarefas</p>
        <div className='lista-tarefas'>
            <ul>
                {listaTarefas.map((tarefa, i) => {
                    {i++}
                    return (<li 
                        className='tarefa-default'
                        onClick={e => atualizaTarefa(e)} 
                        key={i}>{tarefa.props.titulo}
                        <button 
                        className='remove-btn'
                        onClick={() => removeTarefa(tarefa)}
                        >Remover</button>
                        </li>)
                } )}
            </ul>
        </div>

        <div className='tarefa-input'>
            <input name='input-tarefa' id='input-tarefa' placeholder=' ' onChange={e => setInput(e.target.value)} value={input}/>
            <label htmlFor='input-tarefa'>Título da Tarefa</label>
        </div>

        <div className='botoes'>
            <button className='default-btn add-btn' onClick={() => addTarefa(<Tarefa concluida={false} titulo={input}/>)}>Adicionar</button>
            <button className='default-btn cancel-btn' onClick={() => setInput('')}>Cancelar</button>
            <button className='default-btn clear-btn' onClick={() => setListaTarefas([])} >Limpar tarefas</button>
        </div>
        </div>
    )

    function removeTarefa(tarefa) {
        setListaTarefas(listaTarefas.filter(e => e !== tarefa))
    }

    function addTarefa(tarefa) {
        if(tarefa.props.titulo == '') return;
        setListaTarefas([...listaTarefas, tarefa]);
        resetInput();
    }

    function resetInput() {
        setInput('')
        document.querySelector('.tarefa-input input').focus()
    }

    function atualizaTarefa(e) {
        e.target.classList.toggle('finalizada')
    }

}

export default ListaTarefas;