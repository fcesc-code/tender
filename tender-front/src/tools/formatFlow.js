function formatFlow(e){
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

export default formatFlow;