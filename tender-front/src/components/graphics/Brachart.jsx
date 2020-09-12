import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import * as d3 from 'd3';
import './barchart.sass';

const MOCK_DATA = [12, 5, 23, 14, 9, 31];
const COLORS = [ '#5c1800', '#a02b00', '#e53d00', '#ea6433', '#129e0', '#fad8cc' ];

function Barchart() {
  const [ data ] = useState( [ ...MOCK_DATA ] );
  const svgRef = useRef();
  const [ width, setWidth ] = useState( 0 );

  function getMax(array){
    const maxReducer = (a, b) => (a > b) ? a : b;
    return array.reduce(maxReducer);
  }

  function getTotal(array){
    const totalReducer = (a, b) => a + b;
    return array.reduce(totalReducer);
  }

  function drawChart(){
    const w = (width === 0) ? Math.floor(Number(window.getComputedStyle(svgRef.current).width.slice(0,-2))) : width;
    const radius = Math.min(400, w * 0.5 * 0.8);
    const h = Math.max(Math.min(w, 500), radius*2) + 10;  
    const donutWidth = Math.max(40, Math.floor(radius / Math.PI));

    console.log('HERE HERE:', width, '=>', w, h);

    const max = getMax(data);

    function slice(d, i){
      const startA = ( i === 0 ) ? 0 : getTotal( data.slice([ 0, i+1 ]) );
      const endA = startA + d;
      const arc = d3
        .arc()
        .innerRadius(radius-donutWidth)
        .outerRadius(radius)
        .startAngle((startA/max)*Math.PI*2)
        .endAngle((endA/max)*Math.PI*2);
      return arc;
    }

    const svg = d3.select(svgRef.current)
      .append("svg")
      .attr("width", w)
      .attr("height", h)

    svg.selectAll("path")
      .data(data)
      .enter()
      .append("path")
      .attr("transform", `translate(${Math.floor(w/2)}, ${Math.floor(h/2)})`)
      .attr("d", (d, i) => slice(d, i)())
      .attr("fill", (d, i) => `${COLORS[i]}`)
      .attr("stroke", `#f6f6f6`)
      .attr("stroke-width", "1px");

  };

  function setNewSize(){
    if(svgRef.current){
      setWidth(Math.floor(Number(window.getComputedStyle(svgRef.current).width.slice(0,-2))));
    }
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', setNewSize);
    d3.select(svgRef.current).selectAll('*').remove();
    return () => {
      window.removeEventListener('resize', setNewSize);
    }
  })

  useEffect(()=>{
    drawChart();
  }, [ data, width ]);


  return(
    <div className='chart__container'>
      <h2>Donut chart!</h2>
      <div className='charts chart1' ref={svgRef}>
      </div>
    </div>
  );
}

export default Barchart;