import React, { useState, useEffect, useMemo } from 'react';
import './assets/estilo.css';

function App(){
  const[tarefas, setTarefas] = useState([]);

  const[input, setInput] = useState(' ');

  useEffect(()=>{
    const tarefasStorage = localStorage.getItem('tarefas');

    if(tarefasStorage == null){
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(()=>{
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  function adicionar(){
    setTarefas([...tarefas, input]);
    setInput('');
  }

  const totalTarefas = useMemo(()=> tarefas.length, [tarefas]);
  
  return(
    <div className='container'>
      <h1>Lista de tarefas</h1>
      <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
      <div className='botao'>
        <button type="button" onClick={adicionar}>Adicionar</button>
      </div>
      
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>

      <br/>

      <strong>Você tem {totalTarefas} tarefas!</strong>
    </div>
  );

}

export default App;