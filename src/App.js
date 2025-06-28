import {useState} from 'react';

import './App.css';
import WordCard from './components/WordCard/WordCard';

function App() {
  const [words, setWords]= useState([ 
    { front: 'translation', back: 'ubersetzung'},
    { front: 'egg', back:'Ei' },
    { front: 'taxi', back: 'Taxi'},
    { front: 'paper', back:'Papier'},
    {front: 'square', back:'Platz'},
    {front: 'seven', back:'sieben'},
]);

const cardList = words.map (word =>
<WordCard front={words.front} back ={words.back}/>
); 


    return (
    <div className="App">
      <header className="App-header">
        Dictionary App
      </header>
      
     <main className="cards-container">
      {cardList}
    </main>
    </div>
  );
}

export default App;
