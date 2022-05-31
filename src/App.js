import React, { useState, useMemo, useCallback, useEffect } from 'react';
import './style.css'

export default function App() {

  const [tarefas, setTarefas] = useState([])
  const [input, setInput] = useState('')

  function addTarefa () {
    if (input == '') return;
    setTarefas([...tarefas, {titulo: input}]);
    setInput('')
  }

  // const addTarefa = useCallback(() => {
  //   if (input == '') return;
  //   setTarefas([...tarefas, {titulo: input}]);
  //   setInput('')
  // }, [input, tarefas]);

  function handleTeclas(tecla) {
    if(tecla.key == 'Enter') addTarefa();
    if(tecla.key == 'Escape') setInput('');
  }

  function handleSubmit(e) {
    setInput(e.target.value)
  }

  function limpaTarefas() {
    setTarefas([])
  }

  const quantTarefas = useMemo(() => tarefas.length, [tarefas]);

  return (
    <div className='container _flex-c'>
      <h1>Minhas Tarefas</h1>
      <div className='input-block'>
        <input placeholder=' ' id='tarefa' type='text' value={input}
        onChange={e => handleSubmit(e)}
        onKeyDown={tecla => handleTeclas(tecla)}/>
        <label htmlFor='tarefa'>Título da tarefa</label>
      </div>

      <div className='botoes-block _flex-r'>
        <button className='default-btn' onClick={() => addTarefa()}>Adicionar</button>
        <button onClick={() => limpaTarefas()} className='clean-btn'>Limpar</button>
      </div>

      <strong className={quantTarefas < 1 ? 'hidden' : ''}>
        {`Você tem ${quantTarefas} tarefa(s) a fazer.`}
      </strong>

      <div className={'tarefas-block' + [quantTarefas == 0 ? 'hidden' : '']}>
        <ul>
          {tarefas.map((tarefa, i) => <li key={i}>{tarefa.titulo}</li>)}
        </ul>
      </div>
    </div>
  );
}
