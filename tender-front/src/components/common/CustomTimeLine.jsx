import React, { useState } from 'react';
import './customTimeLine.sass';

function PortfolioTimeline(props) {
  const [timeline] = useState(props.timeline);

  return (
    <div className='timeline'>
      <ul>
        {timeline.map(item => {
          return(
            <li className='timeline__item' key={item.content}>
              <div className='item__left'>
              <p>{item.date}</p>
              </div>
              <div className='item__separator'>
                <span className={`separator__dot ${item.status}`}></span>
                <span className='separator__line'></span>
              </div>
              <div className='item__right'>
              <p>{item.content}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default PortfolioTimeline;