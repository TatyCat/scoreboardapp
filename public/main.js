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
const countdownText = document.querySelector("#period-timer span")
let timerStart

/*
const countdownText = document.querySelector("#period-timer span")

const getCountDownText = () => {
  return document.querySelector('#period-timer span')
}
*/

const updateScore1Add = () =>{
  if (score1< 21){
    score1++
    getRandomColor(score1)
    team1ScoreText.textContent = score1 

    if (score1 === 21){
      winner(1)
    } 
  }
}

const updateScore2Add = () =>{
  if (score2< 21){
    score2++
    getRandomColor(score2)
    team2ScoreText.textContent = score2
    if (score2 === 21){
      winner(2)

      // team2ScoreText.classList.add("winningTeam")
      // team2TeamNameText.textContent = `${team2TeamNameText.textContent} YOU WIN!!!!`
      // team2TeamNameText.classList.add("winningTeam")
      // gameOverButtonsGone()
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

// WINNER FUNCTION-----------------------------
const winner = (teamNumber) => {
  let scoreText
  let teamNameText
  
  clearInterval(timerStart)

  if (teamNumber === 1) {
    scoreText = team1ScoreText
    teamNameText = team1TeamNameText
  } else {
    scoreText = team2ScoreText
    teamNameText = team2TeamNameText
  }

  scoreText.classList.add("winningTeam")
  teamNameText.textContent = `${teamNameText.textContent} YOU WIN!!!!`
  teamNameText.classList.add("winningTeam")
  gameOverButtonsGone()
  document.querySelector("#gameTimeButton").disabled = true
  document.querySelector(".resetButton").style.visibility = "visible"

  // team1ScoreText.classList.add("winningTeam")
  // team1TeamNameText.textContent = `${team1TeamNameText.textContent} YOU WIN!!!!`
  // team1TeamNameText.classList.add("winningTeam")
  // gameOverButtonsGone()
  // document.querySelector("#gameTimeButton").disabled = true
  // document.querySelector(".resetButton").style.visibility = "visible"
}


// COUNTDOWN TIMER-----------------------------
//45m each half/quarter

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
 
    if (minutes === 4 || minutes === 9){
      // QUARTER PERIOD COUNT-----------------------------
      // 2 periods per game 
      if (periodCount < 2){
        document.querySelector("#period").textContent = periodCount++
      }

      if(minutes === 90){
        clearInterval(timerStart)
        //if team 1 || team 2 do not have winning team class-declare winner....else/nothing
        if (!team1ScoreText.classList.contains("winningTeam") && !team2ScoreText.classList.contains("winningTeam"))
        {  
          if (score1 > score2){
            winner(1)
          }else if (score2 > score1){
            winner(2)
          }
        }
      }
    }
    
    if(minutes.toString().length === 1){
      minutes = "0"+minutes
    }
    if(seconds.toString().length === 1){
      seconds = "0"+seconds
    }

    countdownText.textContent = minutes + ':' + seconds;
  }
  timerStart = window.setInterval(checkTime, 100)
  
}

const countdownTimer = () => {
  countdownText.textContent = "START!"
  document.querySelector("#gameTimeButton").style.visibility = "hidden"
  oneQuarterTimeFrame()
}
document.querySelector("#gameTimeButton").addEventListener('click', countdownTimer)


// DISABLE BUTTON-----------------------------
let gameButtonsSection = document.querySelector(".update-score")
const gameOverButtonsGone = () =>{
  gameButtonsSection.style.visibility = "hidden"
}

// RESET-------------------------------------
  const resetEverything = () =>{
    //Reset Scores & Display
    score1 = 0
    score2 = 0 
    team1ScoreText.textContent = score1
    team2ScoreText.textContent = score2

    //Reset Buttons 
    document.querySelector(".resetButton").style.visibility = "hidden"
    gameButtonsSection.style.visibility = "visible"
    document.querySelector("#gameTimeButton").style.visibility = "visible"
    document.querySelector("#gameTimeButton").disabled = false


    //Reset Background
    document.body.style.backgroundColor = "white"

    //Reset Text & Text Styling
    team1TeamNameText.textContent = "HOME"
    team2TeamNameText.textContent = "GUEST"
    
    team1TeamNameText.classList.remove("winningTeam")
    team2TeamNameText.classList.remove("winningTeam")

    team1ScoreText.classList.remove("winningTeam")
    team2ScoreText.classList.remove("winningTeam")

    //Reset Period
    document.querySelector("#period").textContent = 0

    //Reset Timer
    countdownText.textContent = "00:00"

    //Reset the Reset Button
    document.querySelector(".resetButton").style.visibility = "hidden"
  }
  document.querySelector(".resetButton button").addEventListener('click', resetEverything)


// CHANGE BACKGROUND UPON SCORE INCREASE CLICK-SLU Colors-----------------------------
const getRandomColor = (score) => {
  let color
  if (score % 2 === 0){
    color = "#FCB60F"
  }else{
    color = "#06553D"
  }
  document.body.style.backgroundColor = color
}


