let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newgameBtn = document.querySelector(".new-game");
let msgCtr = document.querySelector(".msg-container");
let winMsg = document.querySelector(".msg");
let turnO = true;//PLayer with O.
let count = 0;  //To check a Draw.

const winningPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];

const  resetGame = () => {
    turnO = true;
    enableBoxes();
    msgCtr.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click", () => {
        if(turnO === true){         //PLayer with 0
            box.innerText = "O";
            turnO = false;      
        } else{                     //Player with X
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        

    let isWinner = checkWInner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }

    }); 
});

const gameDraw = () => {
    winMsg.innerText = `Game was a Draw.`;
    msgCtr.classList.remove("hide");
    disableBoxes();
  };
const disableBoxes = () => {
    for(box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for(box of boxes){
        box.disabled = false;   
        box.innerText = "";
    }
};
const showWinner = (winner) => {
    winMsg.innerText = `${winner} Wins!`;
    msgCtr.classList.remove("hide");
    disableBoxes();
};

const checkWInner = () => {
    for(pattern of winningPatterns){
        let pos1Val = boxes[pattern[0]].innerText; 
        let pos2Val = boxes[pattern[1]].innerText; 
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val=== pos3Val){
                showWinner(pos1Val);
                return true;
            }
        }
    }
};
newgameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click", resetGame);