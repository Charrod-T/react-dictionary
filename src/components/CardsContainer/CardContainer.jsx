import React from 'react';
import './CardsContainer.css';
import WordCard from '../WordCard/WordCard';

export default function CardContainer({ words, deleteWord }) {
const cardList = words.map ( word =>
    <WordCard 
    front={word.front} 
    back ={word.back} 
    key={word.front}
    deleteWord={deleteWord} />
);

  return (
    <section className="cards-container">
      {cardList}
    </section>
  )
}





