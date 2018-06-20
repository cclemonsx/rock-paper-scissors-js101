
$(document).ready(function() {
  $('.gameWindow').text(game())
})


console.log("function working, variables ok")

function computerPlay(randPlay){

  var choiceArray =[
      'rock',
      'paper',
      'scissors'
  ]
  randPlay = choiceArray[Math.floor(choiceArray.length*Math.random())]
  return randPlay
}

function checkSelection(ps){
  if (ps=='rock' || ps=='scissors' || ps=='paper'){
    return false
  } else {
    return true
  }
}

function playRound() {
  playerSelection=prompt("Please choose your weapon")
  playerSelection=playerSelection.toLowerCase()
  console.log(playerSelection);
  if (checkSelection(playerSelection)){
    alert('no')
    round--
    game()
  } else {
  computerSelection=computerPlay()
  console.log("you chose "+playerSelection+" and the computer chose "+computerSelection+".");
  compareMoves(playerSelection, computerSelection)
  }
}

function compareMoves(p,c){
  if (p==c){
    console.log("it's a tie!")
  } else if (p=='rock' && c=='paper' || p=='scissors' && c=='rock' || p=='paper' && c=='scissors'){
    console.log("the computer le wins")
  } else {
    console.log("you win good job hi 5 here is a cookie :)")
  } game()
}

var round = 0
function game(){
  if (round>4){
    return
  }
    round++
    playRound()
  }





// function checkAge(age) {
//   (age > 18) ? true : confirm('Do you have parents?')
// }
//
// function pow(){
//   x=prompt('Do some math :)')
//   n=prompt('More math yay')
//   return x**n
//
// }
