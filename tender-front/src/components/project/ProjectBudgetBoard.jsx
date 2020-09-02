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
            {data.headers.map(header=>{
              return(<th>{header}</th>)
            })}
          </tr>
        </thead>
        <tbody>
          {data.entries.map(entry=>{
            return(<tr>{entry.map(field=>{
            return(<td>{field}</td>)
            })}</tr>)
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectBudgetBoard;









