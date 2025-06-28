import {useState} from 'react';
import './App.css';
import WordCard from './components/WordCard/WordCard';
import { type } from '@testing-library/user-event/dist/type';

function App() {
  const [words, setWords] = useState([ 
    { front: 'translation', back: 'ubersetzung'},
    { front: 'egg', back:'Ei' },
    { front: 'taxi', back: 'Taxi'},
    { front: 'paper', back:'Papier'},
    { front: 'square', back:'Platz'},
    { front: 'seven', back:'sieben'},
]);

const cardList = words.map ( word =>
<WordCard 
  front={word.front} 
  back ={word.back} 
  key={word.front}/>
); 


    return (
    <div className="App">
      <header className="App-header">
        Dictionary App
      </header>

     <main>
      <section className="card-form">
        <h2> New Card</h2>
        <form action ="#" method ="GET">
          <div className="form-row">
            <label>
              English:
              <input type="text" name="en" placholder="English"/>
            </label>
          </div>
          <div className="form-row">
            <label>
              German:
              <input type="text" name="de" placholder="German"/>
            </label>
          </div>
          <div className="form-row">
            <button type="submit">Add Word</button>
          </div>
        </form> 
      </section>
      <section className="cards-container">
      {cardList}
      </section>
    </main>
    </div>
  );
}

export default App;
