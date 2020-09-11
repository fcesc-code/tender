import React from 'react';
import { connect } from 'react-redux';
import './projectBudgetBoard.sass';
import Spinner from '../common/Spinner';

function ProjectBudgetBoard( { budget } ) {
  for (let p in budget){ console.log('prop ', p)};

  return (
    ( Object.keys(budget).length === 0 ) ? (<Spinner/>) : (
      <div className="project__budgetBoard">
        <table className='board__table'>
          <thead>
            <tr>
              {budget.data.headers.map((header, index)=>{
                return(<th key={`H0.${index}`}>{header}</th>)
              })}
            </tr>
          </thead>
          <tbody>
            {budget.data.entries.map((entry, rowIndex)=>{
              return(<tr key={rowIndex}>{entry.map((field, index)=>{
              return(<td key={`R${rowIndex}.${index}`}>{field}</td>)
              })}</tr>)
            })}
          </tbody>
        </table>
      </div>
    )
  );
}

function mapStateToProps( state, { view } ){
  const selectedBudget = (Object.keys(state.project.data).length === 0) ? '' : ( view === '' ) ? state.project.data[0] : state.project.data.filter(item=>item._id === view)[0];
  return {
    budget: selectedBudget
  }
}

export default connect(mapStateToProps)(ProjectBudgetBoard);









