import React from 'react';

import MealSection from './MealSection';

import './Meals.css';

class Meals extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className = "Meals">
        <p className = "CallToAction">Come back tomorrow for more, and refresh if you want something different!</p>
        <MealSection side = "left" color = "#b6c7e3" title = "Breakfast" url = "#" />
        <MealSection side = "right" color = "#bdaddb" title = "Lunch" url = "#" />
        <MealSection side = "left" color = "#cdc5db" title = "Snack" url = "#" />
        <MealSection side = "right" color = "#bbcfed" title = "Dinner" url = "#" />
      </div>
    )
  }
}

export default Meals;