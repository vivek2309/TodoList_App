import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodo] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (event) =>{
       event.preventDefault();
        setTodo(([...todos,input]));
        setInput('');
  }
  return (
    <div className="App">
      <h1>Todo List</h1>
      <form>
          <input value={input} onChange={e=>setInput(e.target.value)} placeholder='Type Here...'/>
          <button onClick={addTodo}>Add</button>
      </form>
      {
        todos.map( (todo) =>(
             <li>{todo}</li>
        ))
      }
    </div>
  );
}

export default App;
