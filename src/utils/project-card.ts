import { IProjectCard } from "../Model/Portfolio.model";
import Tasks from "../assets/tasks-management.png";
import Magic from "../assets/magic-match.png";
import Weather from "../assets/weather.png";
import Recipe from "../assets/recipe.png";
import Customer from "../assets/list.png";
import Movie from "../assets/movie-finder.png";
import Calculator from "../assets/investment-calculator.png";
import Robo from "../assets/robo-friends.png";
import Shopping from "../assets/shopping-list.png";
import Generator from "../assets/background-generator.png";
    

export const CARD_DATA:IProjectCard[]=[
    {
        id:100,
        link:"https://vimalraveendra.github.io/tasks-management-ngrx/",
        image:Tasks,
        name:'tasks-management'
    },
    {
        id:101,
        link:"https://vimalraveendra.github.io/React-vite-task/",
        image:"./src/assets/magic-match.png",
        name:Magic,
    },
    
   
    {
        id:102,
        link:"https://vimalraveendra.github.io/weatherapp-redux/",
        image:"./src/assets/weather.png",
        name:Weather,
    },
    {
        id:103,
        link:"https://vimalraveendra.github.io/food-recipe/",
        image:"./src/assets/recipe.png",
        name:Recipe
    },
    {
        id:104,
        link:"https://vimalraveendra.github.io/personslist-redux/",
        image:"./src/assets/list.png",
        name:Customer
    },
   
    {
        id:105,
        link:"https://vimalraveendra.github.io/movie-finder-angular/",
        image:"./src/assets/movie-finder.png",
        name:Movie,
    },
    {
        id:106,
        link:"https://vimalraveendra.github.io/investment-calculator-standalone/",
        image:"./src/assets/investment-calculator.png",
        name:Calculator,
    },
  
    {
        id:107,
        link:"https://vimalraveendra.github.io/RoboFriend-Redux/",
        image:"./src/assets/robo-friends.png",
        name:Robo,
    },
    {
        id:108,
        link:"https://vimalraveendra.github.io/shoppingList/",
        image:"./src/assets/shopping-list.png",
        name:Shopping,
    },
   
    {
        id:109,
        link:"https://vimalraveendra.github.io/Background-Generator/",
        image:"./src/assets/background-generator.png",
        name:Generator,
    },
   
]