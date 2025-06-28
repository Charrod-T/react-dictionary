import React from 'react'
import './WordCard.jsx';

export default function WordCard(props) {
  return (
    <div className="WordCard">
        <p>English: {props.en}</p>
        <p>German: {props.de}</p>
      
    </div>
  )
}
