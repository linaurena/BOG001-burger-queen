import React from 'react';
import Style from './menu.module.css';
import Clock from '../organisms/Clock';
import ProfileBox from '../organisms/ProfileBox';
import NavWaiter from '../organisms/NavWaiter';
import LogoBox from '../molecules/Logo';

const ReportOfOrderStatus = ()=>{
  return(
    <div className={`${Style.container}`}>
      <div className={`${Style.nav}`}>
        <LogoBox />
        <ProfileBox />
        <NavWaiter />
        <Clock />
      </div>
      <div className={`${Style.menu}`}>
        <div className={`${Style.choose}`}>
          <h2>Order status data</h2>
        </div>
        <div className={`${Style.order}`}>
        </div>
      </div>
    </div>
  )
}

export default ReportOfOrderStatus;
