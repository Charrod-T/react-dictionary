import {useState} from 'react';
import './WordCard.css';

export default function WordCard({front, back}) {
  const [isFront, setFront] = useState(true);

  const cardCotent = isFront ?
      <div className="front">English: {front}</div>:
      <div className="back">German: {back}</div>;


  return (
    <div className="word-card">
       {cardCotent}
  </div>
  )
}
