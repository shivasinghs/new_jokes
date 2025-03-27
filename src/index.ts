import jokes from "./jokes.js";

export const getJokes = ()=>{

    const length = jokes.length;
   const randomNum = Math.floor(Math.random() * length);
   const getJoke = jokes[randomNum];
   return getJoke;

}         
