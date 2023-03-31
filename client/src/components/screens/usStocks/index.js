import React, { useState } from 'react'
import TabOptions from '../../common/tabOptions';
import TitleLineWithButton from '../../common/titleLineWithButton';
import SquareBox from '../../common/squareBox';
import usCompanies from '../../../assets/USStockCompanies';

const UsStocks = () => {


  const [activeTab, setActiveTab] = useState("US Stocks");
  return (
    <div>
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className='stock-component max-width'>
      <TitleLineWithButton titleName={'Popular Stocks'} button={true} buttonName={'Screener'} svg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={18} width={18}><path d="M0 0h24v24H0z" fill="none" /><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" /></svg>} />
        <SquareBox items={usCompanies} />
      </div>
    </div>
  )
}

export default UsStocks
