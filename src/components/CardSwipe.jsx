
// import React from 'react'
// import './Card.css'
// import Card from './Card'
// import { list } from '../assets/cards-list'

// function Cards() {
//   return (
//     <div className='cards-flex'>
//       {list.map((card, i)=> (
//         <Card card={card} key={i}/>
//       ))}
//     </div>
//   )
// }

// export default Cards

import React from 'react';
import './Card.css';
import Card from './Card';

function Cards({ cards }) { // Accept cards as a prop
  return (
    <div className='cards-flex'>
      {cards.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </div>
  );
}

export default Cards;

