import React from 'react';
import './WordCard.css';

export default function WordCard({front, back}) {
  return (
    <div className="word-card">
        <div className="front">English: {front}</div>
        <div className="back">German: {back}</div>
  </div>
  )
}
