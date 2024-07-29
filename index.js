// Defined Variables
let sum = 0;
let playerActive = 0;
let TotalScore = [0, 0]; // Index 0 for Player 1, Index 1 for Player 2
let gameOn = true; // State Variable
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
let btnNew = document.querySelector(".btn--new");
let currentPlayer1 = document.querySelector("#current--0");
let currentPlayer2 = document.querySelector("#current--1");

let player1Score = (document.querySelector("#score--0").textContent = "0");
let player2Score = (document.querySelector("#score--1").textContent = "0");

document.querySelector(".dice").style.display = "none";
const clickplay=()=>{
  if (gameOn) {
    // let sum = 0; Throws error message, please why sir?
    const diceRoll = Math.trunc(Math.random() * 6 + 1);
    console.log(diceRoll);

    document.querySelector(".dice").style.display = "block";

    const current1 = document.querySelector("#current--" + playerActive);
    const current0 = (current1.textContent = diceRoll);

    const imgDice = document.querySelector(".dice");

    const dice_Value={
        1:'./image/dice-1.png',
        2:'./image/dice-2.png',
        3:'./image/dice-3.png',
        4:'./image/dice-4.png',
        5:'./image/dice-5.png',
        6:'./image/dice-6.png',
        
      }
      const imageEl=document.querySelector('.dice')
      const dicee=document.querySelector(".dice")
      const newImage=dice_Value[diceRoll]
      dicee.style.display = "block";
      imageEl.setAttribute("src", newImage) 

    

    // let sum = 0; Throws error, please why sir?
    if (diceRoll > 1) {
      sum += diceRoll;
      current1.textContent = sum;
    } else {
      // Switch to the Next Player
      switchPlayer();
    }
  }
  }

const play = btnRoll.addEventListener("click",clickplay );

const clickHold=()=>{
  // Add and Display Current Score in sum to the Total score

  if (gameOn) {
    TotalScore[playerActive] += sum;

    let score1 = (document.querySelector("#score--0").textContent =
      TotalScore[0]);
    let score2 = (document.querySelector("#score--1").textContent =
      TotalScore[1]);

    // Declears the Winner!
    if (TotalScore[playerActive] >= 100) {
      document.querySelector("#score--" + playerActive).textContent =
        TotalScore[playerActive];
      console.log("Current Player Wins!");

      document
        .querySelector(".player--" + playerActive)
        .classList.add("player--winner");
      document
        .querySelector(".player--" + playerActive)
        .classList.remove("player--active");

      gameOn = false;

      document.querySelector(".dice").style.display = "none";
    } else {
      // Switch Player
      // playerActive = playerActive = 0 ? 1 : 0;
      switchPlayer();
    }
  }
}


const hold = btnHold.addEventListener("click", clickHold );

const clcknewBtn=()=>{
  sum = 0;
  playerActive = 0;
  TotalScore = [0, 0];

  let player1Score = (document.querySelector("#score--0").textContent = "0");
  let player2Score = (document.querySelector("#score--1").textContent = "0");

  document.querySelector("#current--0").textContent = "0";
  document.querySelector("#current--1").textContent = "0";

  document.querySelector(".dice").style.display = "none";

  document.querySelector(".player--0").classList.remove("player--active");
  document.querySelector(".player--1").classList.remove("player--active");
  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");
  document.querySelector(".player--0").classList.add("player--active");

  gameOn = true;
};
let newBtn = btnNew.addEventListener("click", clcknewBtn)
function switchPlayer() {
  playerActive = playerActive === 0 ? 1 : 0;
  sum = 0; // Reset current score

  currentPlayer1.textContent = "0";
  currentPlayer2.textContent = "0";

   document.querySelector(".player--0").classList.toggle("player--active");
   document.querySelector(".player--1").classList.toggle("player--active");
}
