//  OBJ: A user should be able to update a score and the teams playing.

// SCORE-----------------------------
// set a starting score
let score1 = 0
let score2 = 0

let updateScore1Add = () =>{
  score1++
  document.querySelector(".team1Score").textContent = score1 
}

let updateScore2Add = () =>{
  score2++
  document.querySelector(".team2Score").textContent = score2 
}

let updateScore1Sub = () =>{
  score1--
  document.querySelector(".team1Score").textContent = score1 
}

let updateScore2Sub = () =>{
  score2--
  document.querySelector(".team2Score").textContent = score2 
}


// Select the class for both scores
// Update the score to reflect the new global score

// if  add addButton, increment
document.querySelector('.team-1-add-1-button').addEventListener('click', updateScore1Add)

document.querySelector('.team-2-add-1-button').addEventListener('click', updateScore2Add)

// if  add subtract Button, decrement
document.querySelector('.team-1-subtract-1-button').addEventListener('click', updateScore1Sub)

document.querySelector('.team-2-subtract-1-button').addEventListener('click', updateScore2Sub)


// TEAMS-----------------------------
//if update button is pressed, capture input.
//display input for Team Name

changeTeamName1 = () =>{
  document.querySelector('.team1 h2').textContent = document.querySelector('.team-name input').value
}

changeTeamName2 = () => {
   document.querySelector('.team2 h2').textContent = document.querySelector('.team2 input').value
}

document.querySelector(".update-team-1-name").addEventListener('click', changeTeamName1)

document.querySelector(".team2 button").addEventListener('click', changeTeamName2);



