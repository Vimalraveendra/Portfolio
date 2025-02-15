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
        image:Magic,
        name:'magic-match',
    },
    
   
    {
        id:102,
        link:"https://vimalraveendra.github.io/weatherapp-redux/",
        image:Weather,
        name:'weather-finder'
    },
    {
        id:103,
        link:"https://vimalraveendra.github.io/food-recipe/",
        image:Recipe,
        name:"recipe-search"
    },
    {
        id:104,
        link:"https://vimalraveendra.github.io/personslist-redux/",
        image:Customer,
        name:'customers-list'
    },
   
    {
        id:105,
        link:"https://vimalraveendra.github.io/movie-finder-angular/",
        image:Movie,
        name:'movie-finder',
    },
    {
        id:106,
        link:"https://vimalraveendra.github.io/investment-calculator-standalone/",
        image:Calculator,
        name:'investment-calculator',
    },
  
    {
        id:107,
        link:"https://vimalraveendra.github.io/RoboFriend-Redux/",
        image:Robo,
        name:'Robo-friends',
    },
    {
        id:108,
        link:"https://vimalraveendra.github.io/shoppingList/",
        image:Shopping,
        name:'shopping-list',
    },
   
    {
        id:109,
        link:"https://vimalraveendra.github.io/Background-Generator/",
        image:Generator,
        name:'background-generator',
    },
   
]