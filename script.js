
const player0El       = document.getElementById("player-0");
const player1El       = document.getElementById("player-1");
const score0El        = document.getElementById("score-0");
const score1El        = document.getElementById("score-1");
const currentScore0El  = document.getElementById("current-0");
const currentScore1El  = document.getElementById("current-1");
const diceImgEL       = document.querySelector(".diceImg");
const dicerollEl      = document.querySelector(".diceroll");
const holdEl          = document.querySelector(".hold");
const newGameEl       = document.querySelector(".new-game");






score0El.textContent = 0;
score1El.textContent = 0;

let score  = 0 ;
let active = 0 ;
let finalScore = [0 , 0];

diceImgEL.classList.add("hidden");

dicerollEl.addEventListener("click" , function(){

         let number = Math.trunc( Math.random() * 6 ) + 1;

            diceImgEL.classList.remove("hidden");
                

            diceImgEL.src = `dice-${number}.png`;

            if(number !== 1)
            {
                
                score += number  ;
                document.getElementById(`current-${active}`).textContent = score ; 
                
            }
           else
            {
                
                document.getElementById(`current-${active}`).textContent = 0 ;
                document.getElementById(`score-${active}`).textContent = 0 ;
                player0El.classList.toggle("player-active");
                player1El.classList.toggle("player-active");
                score = 0;
                active = active === 0 ? 1 : 0 ;
                finalScore[active] = 0;
                'currentScore${active}El'.textContent = 0 ;
                              
                          
            }
             
})

holdEl.addEventListener("click" , function(){

            
            finalScore[active] += score ;
            document.getElementById(`score-${active}`).textContent = finalScore[active] ;
            document.getElementById(`current-${active}`).textContent = 0 ;
            document.getElementById(`player-${active}`).classList.remove("player-active");

            active = active === 0 ? 1 : 0 ;

            document.getElementById(`player-${active}`).classList.add("player-active");

            score = 0;
            
             
        
})

newGameEl.addEventListener("click" , function(){

            score0El.textContent = 0 ;
            score1El.textContent = 0 ;

            player0El.classList.add("player-active");
            player1El.classList.remove("player-active");

            active = 0 ;
            finalScore = [0 , 0];
            currentScore0El.textContent = 0 ;
            currentScore1El.textContent = 0 ;
})