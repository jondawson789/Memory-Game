const gameContainer = document.getElementById("game");
let cardsClicked = 0; 
let cardOne = null; 
let cardTwo = null; 
let cardsMatched = 0; 
let allCardsMatched = 5; 

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  let currentCard = event.target; 
  cardsClicked++; 
  
  if(cardsClicked <= 2) {
    
    if(cardsClicked === 1){
      cardOne = currentCard; 
      currentCard.style.backgroundColor = currentCard.classList[0];
    }
    else if(cardsClicked === 2) {
      cardTwo = currentCard; 
      currentCard.style.backgroundColor = currentCard.classList[0]; 

      // comparing if cards match
      if(cardOne.classList[0] != cardTwo.classList[0]) {
        setTimeout(function(){
          cardOne.style.backgroundColor = null;
        cardTwo.style.backgroundColor = null;
        cardsClicked = 0; 
        }, 1000)
       
      }
      else if(cardOne.classList[0] === cardTwo.classList[0] && currentCard != cardOne) {
        cardsClicked = 0; 
        cardsMatched++; 

        if(cardsMatched === allCardsMatched) {
          setTimeout(function(){
            alert("Congratulations! You have completed the game!"); 
          }, 1000) 
        }
      }
      else{
        cardsClicked = 1; 
      }
    }
  } 
}

// when the DOM loads
createDivsForColors(shuffledColors);
