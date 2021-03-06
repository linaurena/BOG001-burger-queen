//Aquí iran las tabs https://www.youtube.com/watch?v=sYaV1jiykPk&ab_channel=AmitavRoy

import React from 'react';
import Style from '../views/menu.module.css';
import BreakfastOptions from '../organisms/BreakfastOptions'
import LunchMealOptions from '../organisms/LunchMealOptions'
import MenuTabs from '../organisms/MenuTabs';


// Buscar elevación del estado
const dataMenu = [
  {
  id: 1,
  name: 'Breakfast',
  content: () => <BreakfastOptions />,
  state: 'active'
  },

  {
  id: 2,
  name: 'Lunch & Meal',
  content: () => <LunchMealOptions />,
  state: 'inactive'
  },
];

const ChooseFood = (props)=>{
  return(
    <div className={`${Style.chooseFood}`}>
      <MenuTabs data= {dataMenu}/>
    </div>
  )
}

export default ChooseFood;
