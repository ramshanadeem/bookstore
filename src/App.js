import { React, useState } from 'react'

import './App.css';
import Mapping from './component/Mapping';
import UContext from './component/Ucontext';

function App() {
  const [input, setInput] = useState("")
  const [Item, setItem] = useState([])
  const ItemEvent = (event) => {
    event.preventDefault()
    setInput(event.target.value);

  }
  const ListOfItem = () => {

    setItem((oldItem) => {
      return [...oldItem, input];
    });
  };
  return (
    <div className="App">
      <h3>bookstore</h3>
      <form>

        <input type="text" value={input} onChange={ItemEvent} />
        <button onClick={ListOfItem}>+</button>
        <ol>
          {Item.map((itemval, index) => {
            return <li key={index}>   {itemval} </li>;
          })
          }
        </ol>

      </form>
      <UContext>
        <Mapping />
      </UContext>
    </div>
  );
}

export default App;
