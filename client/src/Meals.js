import React from 'react';

import MealSection from './MealSection';

import './Meals.css';

// API doc: https://spoonacular.com/food-api/docs#Generate-Meal-Plan

class Meals extends React.Component {
  constructor() {
    super();
    this.state = {
      loading   : false,
      data      : null,
      recipes   : [],
      calories  : null,
      diet      : null,
      allergies : null,
      food      : []
    };

    this.fetchMeals   = this.fetchMeals.bind(this);
    this.fetchRecipes = this.fetchRecipes.bind(this);
    this.makeFood     = this.makeFood.bind(this);
  }

  componentDidMount() {

    console.log('component did mount');
    this.setState ({
      loading : true
    });

    // TODO: make these state, update here
    // API parameters
    this.setState({
      calories  : 1800,
      diet      : 'none',
      allergies : 'peanut',
    }, this.fetchMeals);
    // TODO: get from database
    // TODO: get from database
    // TODO: get from database, array

    this.setState({
      loading : false
    });
  }

  fetchMeals() {
    console.log('fetch meals');

    let counter = 0;
    // fetch("https://api.spoonacular.com/recipes/mealplans/generate?" 
    //       + "apiKey=048a26721a2a416a944e45becc2d10aa&timeFrame=day"
    //       + "&targetCalories=" + this.state.calories + "&diet=" + this.state.diet 
    //       + "&exclude" + this.state.allergies)
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({
    //       data : data
    //     });
    //     counter++;
    //     if ( counter === 1 ) {
    //       this.fetchRecipes();
    //     };
    //   });
  }

  async fetchRecipes() {
    console.log('fetch recipes');

    console.log(this.state.recipes)
    let counter = 0;
    for ( let i = 0; i < 3; i++ ) {
      
      // await fetch("https://api.spoonacular.com/recipes/" 
      //             + this.state.data.meals[i].id 
      //             + "/information?apiKey=048a26721a2a416a944e45becc2d10aa"
      //             + "&includeNutrition=true")
      //   .then(response => response.json())
      //   .then(data => {
      //     console.log('in second then')
      //     let tempRecipes = this.state.recipes.slice(0);
      //     tempRecipes.push(data);
      //     console.log(tempRecipes)
      //     console.log(this.state.recipes)
      //     this.setState({
      //       recipes : tempRecipes
      //     });  
      //     counter++;
      //   });
      //   console.log('counter = ' + counter)
      //   if ( counter === 3 ) {
      //     console.log('in if')
      //     /*console.log(this.state.recipes[i])*/this.makeFood()
      //   }
    }
  }

  makeFood() {
    console.log('makeFood');
    console.log(this.state.recipes)
    // for ( let i = 0; i < 3; i++ ) {
    //   let tempFood = this.state.food.slice(0);
    //   const oneFood = {
    //     id             : i + 1,
    //     name           : this.state.data.meals[i].title,
    //     prepTime       : this.state.data.meals[i].readyInMinutes,
    //     percentCarbs   : this.state.recipes[i].nutrition.caloricBreakdown.percentCarbs,
    //     percentFat     : this.state.recipes[i].nutrition.caloricBreakdown.percentFat,
    //     percentProtein : this.state.recipes[i].nutrition.caloricBreakdown.percentProtein,
    //     ingredients    : this.state.recipes[i].nutrition.ingredients,
    //     instructions   : this.state.recipes[i].instructions
    //   }

    //   tempFood.push(oneFood);

    //   this.setState({
    //     food : tempFood
    //   });
    // }
    console.log(this.state.food)
  }

  render() {

    // TODO: make pretty loading
    // TODO: get rid of console logs
    // TODO: sort out images
    // TODO: fix styling
    // TODO: log daily info
    // TODO: log meal info

    //var $image = $('<img>').attr("src","https://spoonacular.com/recipeImages/" + data.meals[i].id + "-240x150.jpg");

    if ( this.state.food.length !== 3 ) {
      console.log('empty render');
      return (
        <div className = "Meals">
          <p className = "CallToAction">
            Come back tomorrow for more, and refresh if you want something different!
          </p>
          <p className = "MealsSubtitle">
            You're limited to 3 refreshes per day. Enjoy!
          </p>
          <p className = "Loading">
            Loading...
          </p>
        </div>
      )
    }
    console.log('nonempty render');

    const totalCals    = this.state.data.nutrients.calories;
    const totalCarbs   = this.state.data.nutrients.carbohydrates;
    const totalFat     = this.state.data.nutrients.fat;
    const totalProtein = this.state.data.nutrients.protein;
    

    const mealSections = this.state.food.map(food => 
      <MealSection
        key = {food.id}
        data = {food}
      />
    );
    return(
      <div className = "Meals">
        <p className = "CallToAction">
          Come back tomorrow for more, and refresh if you want something different!
        </p>
        <p className = "MealsSubtitle">
          You're limited to 3 refreshes per day. Enjoy!
        </p>
        {mealSections}
      </div>
    )
  }
}

/*<MealSection 
          side = "left" 
          color = "#b6c7e3" 
          title = "Breakfast" 
          url = "#" 
          data = {this.state.foods[0]}
        />
        <MealSection 
          side = "right" 
          color = "#bdaddb" 
          title = "Lunch" 
          url = "#" 
          data = {this.state.foods[1]}
        />
        <MealSection 
          side = "left" 
          color = "#cdc5db" 
          title = "Snack" 
          url = "#" 
          data = {this.state.foods[2]}
        />*/

export default Meals;