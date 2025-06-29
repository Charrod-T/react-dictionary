import React from 'react';
import './CardsContainer.css';
import WordCard from '../WordCard/WordCard';

export default function CardContainer({ words }) {
const cardList = words.map ( word =>
    <WordCard 
    front={word.front} 
    back ={word.back} 
    key={word.front}/>
);

  return (
    <section className="cards-container">
      {cardList}
    </section>
  )
}





