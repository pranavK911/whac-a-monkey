const square=document.querySelectorAll('.square');
const mole=document.querySelector('.mole');
const result=document.querySelector('.result');
const timeleft=document.querySelector('.time-left');
// console.log(squre);


let randomDiv;
let randomNumber;
let score=0;
let time =30;
function squareFun(){
//    for(let i=0;i<square.length ;i++){
//     square.classList.remove('mole');
//    }
square.forEach(sq=>{
    sq.classList.remove('mole');
})
   randomNumber=Math.floor(Math.random()*9);
   randomDiv=square[randomNumber];
   randomDiv.classList.add('mole');
//    console.log(randomDiv);

}

square.forEach(squareId=>{
    squareId.addEventListener('click',()=>{
        // console.log(squareId.id);
        if(squareId.id===randomDiv.id){
            score++;
            result.innerHTML=score;
        }
    })
})

function callMole(){
    if(time){
        squareFun()
        time--;
        timeleft.innerHTML=time;
    }
    else{
        alert('Game over '+ score)
        // squareFun();
    }
    }
   
setInterval(callMole, 600)

