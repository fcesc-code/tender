import React from 'react';
import budget_board_mock from './../../mockdata-front/budget_board_mock';
import './projectBudgetBoard.sass';

function ProjectBudgetBoard() {
  const data = budget_board_mock;

  return (
    <div className="project__budgetBoard">
      <table className='board__table'>
        <thead>
          <tr>
            {data.headers.map((header, index)=>{
              return(<th key={`H0.${index}`}>{header}</th>)
            })}
          </tr>
        </thead>
        <tbody>
          {data.entries.map((entry, rowIndex)=>{
            return(<tr key={rowIndex}>{entry.map((field, index)=>{
            return(<td key={`R${rowIndex}.${index}`}>{field}</td>)
            })}</tr>)
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectBudgetBoard;









