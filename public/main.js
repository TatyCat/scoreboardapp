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
  if (score1< 2){
    score1++
    getRandomColor(score1)
    team1ScoreText.textContent = score1 

    if (score1 === 2){
      team1ScoreText.classList.add("winningTeam")
      team1TeamNameText.textContent = `${team1TeamNameText.textContent} YOU WIN!!!!`
      team1TeamNameText.classList.add("winningTeam")
      disableButtonsReset()
    } 
  }
}

const updateScore2Add = () =>{
  if (score2< 21){
    score2++
    getRandomColor(score2)
    team2ScoreText.textContent = score2
    if (score2 === 21){
      team2ScoreText.classList.add("winningTeam")
      team2TeamNameText.textContent = `${team2TeamNameText.textContent} YOU WIN!!!!`
      team2TeamNameText.classList.add("winningTeam")
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
  team1TeamNameText.textContent = document.querySelector('.team-name input').value
}

changeTeamName2 = () => {
  team2TeamNameText.textContent = document.querySelector('.team2 input').value
}

document.querySelector(".update-team-1-name").addEventListener('click', changeTeamName1)

document.querySelector(".team2 button").addEventListener('click', changeTeamName2)

// COUNTDOWN TIMER-----------------------------
//45m each half/quarter
const countdownText = document.querySelector("#period-timer span")


const oneQuarterTimeFrame = () => {
  let initialTime = Date.now();
  let periodCount = 0

  function checkTime(){
    let timeDifference = Date.now() - initialTime;
    let formatted = convertTime(timeDifference);
  }

  function convertTime(miliseconds) {
    let totalSeconds = Math.floor(miliseconds/1000);
    let minutes = Math.floor(totalSeconds/60);
    let seconds = totalSeconds - minutes * 60;
 
 if (seconds === 5){
        clearInterval(setInterval)
        countdownText.textContent = "Game:End"
      }
    if (minutes === 45 || minutes === 90 || seconds === 30){
      document.querySelector("#period").textContent = periodCount++
      
    }
    
    if(minutes.toString().length === 1){
      minutes = "0"+minutes
    }
    if(seconds.toString().length === 1){
      seconds = "0"+seconds
    }
  
    countdownText.textContent = minutes + ':' + seconds;
  }

  window.setInterval(checkTime, 100);
}

const countdownTimer = () => {
  countdownText.textContent = "START!"
  oneQuarterTimeFrame()
}

document.querySelector("#gameTimeButton").addEventListener('click', countdownTimer)


// QUARTER PERIOD COUNT-----------------------------
// 2 period --See Above



// DISABLE BUTTON-----------------------------
// let allButtons = document.getElementsByClassName("team-1-add-1-button team-2-add-1-button team-1-subtract-1-button team-2-subtract-1-button update update-team-1-name")
let allButtons = document.getElementsByClassName("team-1-subtract-1-button")

const disableButtonsReset = () => {
  const resetEverything = () =>{
    //Reset Scores & Display
    score1 = 0
    score2 = 0 
    team1ScoreText.textContent = score1
    team2ScoreText.textContent = score2

    //Reset Background
    document.body.style.backgroundColor = "white";

    //Reset Text & Text Styling
    team1TeamNameText.textContent = "HOME"
    team2TeamNameText.textContent = "Guest"
    
    team1TeamNameText.classList.remove("winningTeam")
    team2TeamNameText.classList.remove("winningTeam")

    team1ScoreText.classList.remove("winningTeam")
    team2ScoreText.classList.remove("winningTeam")

    //Reset Period
    document.querySelector("#period").textContent = 0

    //Reset Timer
    document.querySelector("#period-timer").textContent = "00:00"

    //Reset Reset Button
    document.querySelector(".resetButton").style.visibility = "hidden"
  }

  document.querySelector(".resetButton").style.visibility = "visible"
  document.querySelector(".resetButton button").addEventListener('click', resetEverything)
  
   // document.querySelector("team-1-subtract-1-button").disabled = true; 
  // allButtons.disabled = true; 
}

// CHANGE BACKGROUND UPON SCORE INCREASE CLICK-----------------------------
const getRandomColor = (score) => {
  let color
  if (score % 2 === 0){
    color = "#FCB60F"
  }else{
    color = "#06553D"
  }
  document.body.style.backgroundColor = color;
}


