import React from 'react';
import { Link } from 'react-router-dom';
import './projectBudgetsTabOptions.sass';
import AddIcon from '@material-ui/icons/Add';
import TuneIcon from '@material-ui/icons/Tune';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';

function ProjectBudgetTabOptions() {

  return (
    <div className="projectBudgetOptions__tab">
      <div className='tab__left'>
        <div className='tab__item'>
          <Link to={'/'}>Budgets summary</Link>
        </div>
      </div>
      <div className='tab__right'>
        <div className='tab__item'>
          <AddIcon className='icon' htmlColor='ffffff' />
        </div>
        <div className='tab__item'>
          <TuneIcon className='icon' htmlColor='#ffffff' />
        </div>
        <div className='tab__item tab__right'>
          <SortByAlphaIcon className='iconRight' htmlColor='#ffffff' />
        </div>
      </div>
    </div>
  );
}

export default ProjectBudgetTabOptions;