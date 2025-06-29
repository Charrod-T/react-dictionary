import {useState} from 'react';
import './App.css'; 
import WordForm from './components/Wordform/WordForm';
import CardsContainer from './components/CardsContainer/CardContainer';

function App() {
  const [words, setWords] = useState([ 
    { front: 'translation', back: 'ubersetzung'},
    { front: 'egg', back:'Ei' },
    { front: 'taxi', back: 'Taxi'},
    { front: 'paper', back:'Papier'},
    { front: 'square', back:'Platz'},
    { front: 'seven', back:'sieben'},
]);


const addWord =  (front, back) => {
  const newWords  = [...words, {front, back}];
  setWords(newWords);
}


    return (
    <div className="App">
      <header className="App-header">
        Dictionary App
      </header>

     <main>
      <WordForm addWord = {addWord} />
      <CardsContainer words={words} />
    </main>
    </div>
  );
}

export default App;
