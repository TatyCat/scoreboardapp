//  OBJ: A user should be able to update a score and the teams playing.

// SCORE-----------------------------
// set a starting score
// add or subtract score if less than 21 or greater than 0
// change background color for every score increase
// if 21, let user know they won

let score1 = 0
let score2 = 0
let team1ScoreText = document.querySelector(".team1Score")
let team2ScoreText = document.querySelector(".team2Score")
let team1TeamNameText = document.querySelector('.team1 h2')
let team2TeamNameText = document.querySelector('.team2 h2')

const updateScore1Add = () =>{
  if (score1<= 21){
    score1++
    getRandomColor()
    team1ScoreText.textContent = score1 

    if (score1 === 21){
      team1ScoreText.classList.add("winningTeam")
      team1TeamNameText.textContent = `${team1TeamNameText.textContent} YOU WIN!!!!`
      team1TeamNameText.classList.add("winningTeam")
      disableButtonsReset()
    } 
  }
}

const updateScore2Add = () =>{
  if (score2<= 21){
    score2++
    getRandomColor()
    team2ScoreText.textContent = score2
    if (score2 === 21){
      team2ScoreText.classList.add("winningTeam")
      team2TeamNameText.textContent = `${team2TeamNameText.textContent} YOU WIN!!!!`
      document.querySelector('.team2 h2').classList.add("winningTeam")
      disableButtonsReset()
    }
  }
}

const updateScore1Sub = () =>{
  if (score1 > 0){
    score1--
  }else {
    alert("Score is already at zero.")
  }
  team1ScoreText.textContent = score1 
}

const updateScore2Sub = () =>{
  if (score1 > 0){
  score2--
  }else {
    alert("Score is already at zero.")
  }
  team2ScoreText.textContent = score2 
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

// DISABLE BUTTON-----------------------------
const disableButtonsReset = () => {
  document.querySelectorAll("button").disabled = true; 

}

// CHANGE BACKGROUND UPON SCORE INCREASE CLICK-----------------------------
const getRandomColor = () => {
  let letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  document.body.style.backgroundColor = color;
}


