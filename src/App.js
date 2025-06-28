import './App.css';
import WordCard from './components/WordCard/WordCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Dictionary App
      </header>
     <main>
      <WordCard en="translation" de="ubersetzung" />
      <WordCard en="egg" de="ei" />

     </main>
    </div>
  );
}

export default App;
