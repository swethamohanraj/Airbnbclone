// import React, { useRef } from 'react';
// import "./Filter.css";
// import { links } from '../assets/images.links';

// function Filter({ selectedFilter, setSelectedFilter }) {
//   const scrollRef = useRef(null);

//   const scroll = (scrollOffset) => {
//     scrollRef.current.scrollLeft += scrollOffset;
//   };

//   return (
//     <div className="filter-wrapper">
//       <button onClick={() => scroll(-200)} className="scroll-btn left">‹</button>
//       <div className="filter-div" ref={scrollRef}>
//         {links.map((item, i) => (
//           <div
//             key={i}
//             className={`links-box ${i === selectedFilter ? 'selected-box' : ''}`}
//             onClick={() => {
//               console.log("selecting key", i);
//               setSelectedFilter(i);
//             }}
//           >
//             <img src={item.imgSrc} className="links-img" alt={item.label} />
//             <p className={`links-label ${i === selectedFilter ? 'selected-label' : ''}`}>
//               {item.label}
//             </p>
//           </div>
//         ))}
//       </div>
//       <button onClick={() => scroll(200)} className="scroll-btn right">›</button>
//     </div>
//   );
// }

// export default Filter;

import React from 'react';
import './Filter.css'; // Assuming this is the correct path to your CSS file
import { links } from '../assets/images.links'; // Assuming this is the correct path to your links

function Filter({ selectedFilter, setSelectedFilter }) {
  return (
    <div className="filter-div">
      {links.map((item, i) => (
        <div
          key={i}
          className={`links-box ${item.label === selectedFilter ? "selected-box" : ""}`}
          onClick={() => {
            console.log("selecting key", item.label);
            setSelectedFilter(item.label);
          }}
        >
          <img src={item.imgSrc} className="links-img" alt="img" />
          <p className={`links-label ${item.label === selectedFilter ? "selected-label" : ""}`}>
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Filter;