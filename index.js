console.log("Welcome to Tic Tac Toe");
let turn = "X";

//Function to change the turn
const changeTurn = ()=>{
    return turn === "X" ? "0" : "X"
}

//Function to check win
const checkWin = () => {

}


//Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", ()=> {
        if(boxtext.innerHTML === "")
        {
            boxtext.innerHTML = turn;
            turn = changeTurn();
            checkWin();
            document.querySelector(".info").innerHTML = "Turn for " + turn;
        }
    })
})