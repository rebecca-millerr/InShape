import React from 'react';

import MealSection from './MealSection';

import './Meals.css';
import MealSummary from './MealSummary';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

class Meals extends React.Component {
  constructor() {
    super();
    this.state = {
      loading   : false,

      calories  : '',
      diet      : '',
      allergies : '',

      data      : null,
      recipes   : [],
      food      : [],

      refreshes : -1,
      loggedIn  : false
    };

    this.getUserInfo = this.getUserInfo.bind(this);

    this.fetchMeals   = this.fetchMeals.bind(this);
    this.fetchRecipes = this.fetchRecipes.bind(this);
    this.makeFood     = this.makeFood.bind(this);
  }

  async componentDidMount() {

    this.setState ({
      loading : true
    });

    setTimeout(async () => {
      await this.fetchMeals();  
    }, 3000);
  }

  async getUserInfo() {
    let allergies = new Array(5); // initialize allergies array

    const response = await fetch('/info/' + this.props.username); // get data
    const json = await response.json() // data to json

    const user = json[0]

    if ( user ) {
      allergies[0] = user.allergy1;
      allergies[1] = user.allergy2;
      allergies[2] = user.allergy3;
      allergies[3] = user.allergy4; 
      allergies[4] = user.allergy5;

        // use for loops to go through the 5 things in the array (array.length) 
        for ( let i = 0; i < allergies.length; i++ ) { 
          if ( allergies[i] === null || allergies[i] === 'undefined' ) {
            allergies = allergies.splice(0, i);
            break;
          }
        }

      // turn array into comma separated list
      const allergyString = allergies.join(',');

        this.setState({
          allergies : allergyString
        });

      // get calories and make calories state
      this.setState({
        calories : user.calories
      });

      // get diet and account for 'none' and make diet state
      this.setState({
        diet : user.diet
      });
    }
  }

  async fetchMeals() {

    this.setState({
      loggedIn : this.props.username === '---' ? false : true,
      loading : true,
      food : []
    })
    
    if ( !this.state.loggedIn ) {
      this.setState({
        loading : false
      })
      return;
    }

    if ( this.state.refreshes >= 5 ) {
      alert('You\'ve exceeded your daily refresh limit! Come back tomorrow!');
      return;
    }

    let counter = 0;
    if ( !this.state.calories ) {
      await this.getUserInfo();
    }

    await fetch("https://api.spoonacular.com/recipes/mealplans/generate?" 
          + "apiKey=c0399aa51ebd4d3bbca71982c17a58b5&timeFrame=day"
          + "&targetCalories=" + this.state.calories + "&diet=" + this.state.diet 
          + "&exclude" + this.state.allergies)
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => ({
          data      : data,
          refreshes : prevState.refreshes + 1
        }));
        counter++;
        if ( counter === 1 ) {
          this.fetchRecipes();
        };
      });
  }

  async fetchRecipes() {

    this.setState({
      recipes : []
    })
    let counter = 0;
    for ( let i = 0; i < 3; i++ ) {
  
      await fetch("https://api.spoonacular.com/recipes/" 
                  + this.state.data.meals[i].id 
                  + "/information?apiKey=c0399aa51ebd4d3bbca71982c17a58b5"
                  + "&includeNutrition=true")
        .then(response => response.json())
        .then(data => {
          let tempRecipes = this.state.recipes.slice(0);
          tempRecipes.push(data);

          this.setState({
            recipes : tempRecipes
          });  
          counter++;
        });

        if ( counter === 3 ) {
          this.makeFood();
        }
    }
  }

  makeFood() {

    this.setState({
      food : []
    })
    for ( let i = 0; i < 3; i++ ) {
      let tempFood = this.state.food.slice(0);
      const oneFood = {
        id             : i + 1,
        name           : this.state.data.meals[i].title,
        imageSource    : "https://spoonacular.com/recipeImages/" + this.state.data.meals[i].id + "-240x150.jpg",
        prepTime       : this.state.data.meals[i].readyInMinutes,
        calories       : Math.round(this.state.recipes[i].nutrition.nutrients[0].amount),
        percentCarbs   : this.state.recipes[i].nutrition.caloricBreakdown.percentCarbs,
        percentFat     : this.state.recipes[i].nutrition.caloricBreakdown.percentFat,
        percentProtein : this.state.recipes[i].nutrition.caloricBreakdown.percentProtein,
        servings       : this.state.recipes[i].servings,
        ingredients    : this.state.recipes[i].nutrition.ingredients,
        instructions   : this.state.recipes[i].instructions
      }

      tempFood.push(oneFood);

      this.setState({
        food : tempFood,
        loading : false
      });
    }
  }

  render() {

    if ( this.state.loading && this.state.food.length !== 3 ) {
      return (
        <div className = "Meals">
          <p className = "CallToAction">
            Come back tomorrow for more!
          </p>
          <p className = "Loading">
            Loading...
          </p>
        </div>
      )
    }

    if ( !this.state.loggedIn ) {
      return (
        <div className = "Meals">
          <p className = "CallToAction">
            Log in to see this page!
          </p>
        </div>
      )
    }

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
          Come back tomorrow for more! 
        </p>
        <p className = "MealSubtitle">
          If you want new options, just hit refresh! You're limited to 5 refreshes per day.
        </p>
        <FontAwesomeIcon 
          icon = {faRedo} 
          className = "RefreshIcon"
          onClick = {() => this.fetchMeals()}
        />
        <MealSummary 
          cals    = {totalCals} 
          carbs   = {totalCarbs}
          fat     = {totalFat}
          protein = {totalProtein}
        />
        {mealSections}
      </div>
    )
  }
}

export default Meals;