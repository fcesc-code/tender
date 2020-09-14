import React from 'react';
import './dropdown.sass';

function Dropdown() {
  // console.log('IMPORTANT:', props);
  // const data = props.data;
  const data = ['ongoing', 'planned', 'closed'];

  console.log('in the dropdown component: DATA: ', data);
  // console.log('in the dropdown component: OPTIONS: ', filter);

  // function getList(){
  //   if (data !== undefined){
  //     return data.map((v, i)=>{
  //       return (<li key={i} onClick={(event)=>{event.preventDefault(); setOption(v)}}>{v}</li>)
  //     })
  //   } else {
  //     return '';
  //   }
  // }

  return (
    <div className='dropdown'>
      <ul className='dropdown__list'>
        {(data !== undefined) ? 
          data.map((v, i)=>{
            return (<li key={i} onClick={(event)=>{event.preventDefault(); }}>{v}</li>)
          }) : '' }
      </ul>
    </div>  
  );
}

export default Dropdown();