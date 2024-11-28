let boxes = document.querySelectorAll(".box");
let resetGame = document.querySelector (".reset-game");
let turn = true;
let i = 0;
const winchance = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
let disabled = () =>{
  for (const box of boxes) {
    box.disabled = true;
  }
}
function newgame(){
  turn = true;
  for (const box of boxes) {
    box.disabled = false;
    box.innerText = "";
    document.querySelector(".winner").innerText = ""
    i = 0
  }
}
boxes.forEach((box) =>{
  box.addEventListener("click", () =>{
    if(turn){
      box.innerText = "O";
      turn = false;
    }
    else{
      box.innerText = "X";
      turn = true;
    }
    box.disabled = true;
    i++;
    winner();
  })
})

const winner = () =>{
  for (let win of winchance) {
   let win1 = boxes[win[0]].innerText;
   let win2 = boxes[win[1]].innerText;
   let win3 = boxes[win[2]].innerText;
   if(win1 != "" &&win2 != "" &&win3 != "" ){
    if(win1 == win2 && win2 == win3){
      //console.log("winner")
      document.querySelector(".winner").innerText = `Player ${win1} is Winner`
      disabled();

    }
    else{
      if(i > 8){
        document.querySelector(".winner").innerText = "Match Draw"
      }
    }
   }
  }
}