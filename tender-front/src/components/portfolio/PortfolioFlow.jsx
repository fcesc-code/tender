import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CustomTimeLine from '../common/CustomTimeLine';
import { loadPortfolioFlowByUserId } from '../../redux/actions/portfolioActions';
import './portfolioFlow.sass';
import Spinner from '../common/Spinner';

function PortfolioFlow( { dispatch, flow, userId } ) {
  console.log('aqui en el componente, mostrando flow', flow);

  useEffect(()=>{
    if( flow === undefined && userId !== undefined ){
      // console.log('%cuseEffect calls loadProjectsByUserId', 'color: yellow');
      dispatch(loadPortfolioFlowByUserId(userId));
    }
  }, [ userId ]);

  return (
    ( flow === undefined ) ? (<Spinner/>) : (
      <div className='portfolioFlow__container'>
        <h2>FLOW</h2>
        <CustomTimeLine timeline={flow}/>
      </div>
    )
  );
}

function mapStateToProps(state){
  function callback(e){
    const realDate = e.time === '' ? '' : new Date(e.time);
    const estDate = e.est_time === '' ? '' : new Date(e.est_time);

    function getCustomDateString(date){
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      return `${String(year).slice(-2)}.${month}.${day}`;
    }

    const newE = { ...e };
    newE.time = realDate === '' ? '' : getCustomDateString(realDate);
    newE.est_time = estDate === '' ? '' : getCustomDateString(estDate);

    return newE;
  }

  const formatedData = state.portfolio.flow === undefined ? undefined : state.portfolio.flow.map(e=>callback(e));

  return ({
    flow: formatedData,
    userId: state.user.uid
  });
}

export default connect(mapStateToProps)(PortfolioFlow);