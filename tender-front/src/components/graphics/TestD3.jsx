import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './barchart.sass';

const MOCK_DATA = [12, 5, 23, 14, 9, 31];

function Barchart() {
  const [staticData] = useState(MOCK_DATA);
  const [data, setData] = useState([ ...MOCK_DATA ]);
  const svgRef = useRef();

  const [ average, setAverage ] = useState(calculateAverage(data));
  const [ max, setMax ] = useState(calculateMax(data));

  console.log('HERE HERE...', average, max);

  function calculateAverage(array){
    const reducerTotal = (a, b) => a + b;
    const total = array.reduce(reducerTotal);
    return (total/array.length).toFixed(2);
  }

  function calculateMax(array){
    const reducerMax = (a, b) => a > b ? a : b;
    return array.reduce(reducerMax);
  }

  function drawChart(){
    const w = 500;
    const h = 300;
    const colors = ['green', 'lime', 'gray', 'yellow', 'orange', 'pink'];

    const svg = d3.select('div.chart1')
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("margin-left", 100);
    
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("width", 65)
      .transition().duration(1000)
      .attr("y", (d, i) => h - 10 * d)
      .attr("height", (d, i) => d * 10)
      .attr("fill", (d, i) => `${colors[i]}`);

    svg.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => `${((d/max)*100).toFixed(2)} %`)
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - (10 * d) - 5);

  };

  function drawCircles(){
    const w = 700;
    const h = 500;

    const svg = d3.select(svgRef.current)
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("margin-left", 100);
    
    svg.selectAll("circle")
      .data(data)
      .join("circle")
      .attr("r", value => value)
      .attr("cx", value => value * 10)
      .attr("cy", value => max)
      .attr("stroke", "red");

  }

  // function drawChart2(){
  //   const w = 400;
  //   const h = 600;

  //   const svg = d3.select("div.chart2")
  //     .append("svg")
  //     .attr("width", w)
  //     .attr("height", h)
  //     .style("margin-left", 100);
    
  //   svg.selectAll("rect")
  //     .data(data)
  //     .enter()
  //     .append("rect")
  //     .attr("x", (d, i) => h - 10 * d)
  //     .attr("y", (d, i) => i * 70)
  //     .attr("width", (d, i) => d * 10)
  //     .attr("height", 65)
  //     .attr("fill", "green");

  //   svg.selectAll("text")
  //     .data(data)
  //     .enter()
  //     .append("text")
  //     .text((d) => d)
  //     .attr("x", (d, i) => h - (10 * d) - 3)
  //     .attr("y", (d, i) => i * 70);
  // };

  useEffect(()=>{
    setAverage(calculateAverage(data));
    setMax(calculateMax(data));
  }, [ data ]);

  useEffect(()=>{
    drawChart();
  }, [ data ]);

  // useEffect(()=>{
  //   drawChart2();
  // }, []);

  useEffect(()=>{
    drawCircles();
  }, [ data ]);


  return(
    <div className='chart__container'>
      <h2>Gráfico en react!</h2>
      <div className='charts chart1'>
      </div>
      <div className='charts chart2' ref={svgRef}>
      <button onClick={() => {setData(data.map(value => value + Math.floor(Math.random()*5)))}}>Update Data</button>
      <button onClick={() => {setData(data.filter(value => value > average))}}>Filter data</button>
      </div>
    </div>
  );
}

export default Barchart;