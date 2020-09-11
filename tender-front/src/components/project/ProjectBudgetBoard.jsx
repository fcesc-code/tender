import React from 'react';
import { connect } from 'react-redux';
import './projectBudgetBoard.sass';
import Spinner from '../common/Spinner';

function ProjectBudgetBoard( { budget } ) {

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
  const selectedBudget = (Object.keys(state.project.data).length === 0) ? '' : ( view === '' ) ? { ...state.project.data[0] } : { ...state.project.data.filter(item=>item._id === view)[0] };
 
  function formatSelectedBudget(budget){
    console.log('ENTERING FORMATTING FUNCTION WITH ', budget, budget.data.entries);
    const currency = budget.currency;
    for (let entry of budget.data.entries){
      entry[4] = formatIntToCurrency(entry[4], currency);
      entry[5] = formatIntToCurrency(entry[5], currency);
    }
    console.log('EXITING FORMATTING FUNCTION WITH ', budget);
  }

  function formatIntToCurrency(currentNumber, currency){
    const newNumber = (Number(currentNumber) / 100).toFixed(2);
    let newCurrency;
    switch(currency){
      case 'eur':
        newCurrency = '€';
        break;
      default:
        newCurrency = currency;
    }
    const newValue = `${newNumber} €`;
    return newValue;
  }

  const formatedBudget =  (selectedBudget === '' && view === '') ? '' : formatSelectedBudget(selectedBudget);
  console.log('AQUI FORMAT', formatedBudget);

  return {
    budget: selectedBudget
  }
}

export default connect(mapStateToProps)(ProjectBudgetBoard);









