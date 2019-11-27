import React from 'react';

import MealSection from './MealSection';

import './Meals.css';

// API doc: https://spoonacular.com/food-api/docs#Generate-Meal-Plan

class Meals extends React.Component {
  constructor() {
    super();
    this.state = {
      loading : false, // TODO: implement loading function
      meals : null,
      recipes : [null, null, null]
    };

    this.fetchMeals = this.fetchMeals.bind(this);
    this.fetchRecipes = this.fetchRecipes.bind(this);
  }

  componentDidMount() {

    // API parameters
    const calories  = '1800';     // TODO: get from database
    const diet      = 'none';     // TODO: get from database
    const allergies = 'peanut';   // TODO: get from database

    this.fetchRecipes(calories, diet, allergies);

    // loading : false,
  }

  async fetchMeals(calories, diet, allergies) {
    // this.setState({ loading : true });
    // await fetch("https://api.spoonacular.com/recipes/mealplans/generate?" 
    //       + "apiKey=048a26721a2a416a944e45becc2d10aa&timeFrame=day"
    //       + "&targetCalories=" + calories + "&diet=" + diet 
    //       + "&exclude" + allergies)
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({
    //       meals : data
    //     });
    //   });
  }

  async fetchRecipes(calories, diet, allergies) {
    // await this.fetchMeals(calories, diet, allergies);
    // for ( let i = 0; i < 3; i++ ) {
    //   await fetch("https://api.spoonacular.com/recipes/" 
    //               + this.state.meals.meals[i].id 
    //               + "/information?apiKey=048a26721a2a416a944e45becc2d10aa"
    //               + "&includeNutrition=true")
    //     .then(response => response.json())
    //     .then(data => {
    //       let tempRecipes = this.state.recipes;
    //       tempRecipes[i] = data;
    //       this.setState({
    //         recipes : tempRecipes
    //       })
    //     });  
    // }
  }

  render() {

    if ( this.state.meals ) {
      console.log(this.state.meals);
      const totalCals    = this.state.meals.nutrients.calories;
      const totalCarbs   = this.state.meals.nutrients.carbohydrates;
      const totalFat     = this.state.meals.nutrients.fat;
      const totalProtein = this.state.meals.nutrients.protein;
      let foods          = new Array(3);

      for ( let i = 0; i < 3; i++ ) {
        foods[i] = {
          name           : this.state.meals.meals[i].title,
          prepTime       : this.state.meals.meals[i].readyInMinutes,
          percentCarbs   : this.state.recipes[i].nutrition.caloricBreakdown.percentCarbs,
          percentFat     : this.state.recipes[i].nutrition.caloricBreakdown.percentFat,
          percentProtein : this.state.recipes[i].nutrition.caloricBreakdown.percentProtein,
          ingredients    : this.state.recipes[i].nutrition.ingredients,
          instructions   : this.state.recipes[i].instructions
        }
      }
    }

    return(
      <div className = "Meals">
        <p className = "CallToAction">
          Come back tomorrow for more, and refresh if you want something different!
        </p>
        <p className = "MealsSubtitle">
          You're limited to 3 refreshes per day. Enjoy!
        </p>
        <MealSection 
          side = "left" 
          color = "#b6c7e3" 
          title = "Breakfast" 
          url = "#" 
        />
        <MealSection 
          side = "right" 
          color = "#bdaddb" 
          title = "Lunch" 
          url = "#" 
        />
        <MealSection 
          side = "left" 
          color = "#cdc5db" 
          title = "Snack" 
          url = "#" 
        />
        <MealSection 
          side = "right" 
          color = "#bbcfed" 
          title = "Dinner" 
          url = "#" 
        />
      </div>
    )
  }
}

export default Meals;