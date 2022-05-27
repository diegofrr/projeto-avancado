import React, { useState } from 'react';
import './listaTarefas.css'
import Tarefa from '../Tarefa';

import { UilTrashAlt } from '@iconscout/react-unicons'

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
                        <span 
                        className='remove-icon'
                        onClick={() => removeTarefa(tarefa)}
                        ><UilTrashAlt/></span>
                        </li>)
                } )}
            </ul>
        </div>

        <div className='tarefa-input'>
            <input name='input-tarefa' id='input-tarefa' placeholder=' ' 
            onChange={e => setInput(e.target.value)} 
            onKeyUp={e => {
                if(e.key == 'Enter') addTarefa();
                if(e.key == 'Escape') setInput('');
            }}
            value={input}/>
            <label htmlFor='input-tarefa'>Título da Tarefa</label>
        </div>

        <div className='botoes'>
            <button className='default-btn add-btn' onClick={() => addTarefa()}>Adicionar</button>
            <button className='default-btn cancel-btn' onClick={() => setInput('')}>Cancelar</button>
            <button className='default-btn clear-btn' onClick={() => setListaTarefas([])} >Limpar tarefas</button>
        </div>
        </div>
    )

    function removeTarefa(tarefa) {
        setListaTarefas(listaTarefas.filter(e => e !== tarefa))
    }

    function addTarefa() {
        let tarefa = <Tarefa titulo={input}/>
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