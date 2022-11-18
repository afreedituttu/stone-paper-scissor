const form = document.getElementById("user-form");
const userDisplay = document.getElementById("user-selection");
const computerDisplay = document.getElementById("computer-selection");
const resultDisplay = document.getElementById("result-box");
const userPoints = document.getElementById("points-player");
const computerPoints = document.getElementById("points-computer");
const choice = document.getElementsByName("choice");

const choices = ['paper','scissor','stone']

function getMathRandom(){
    return Math.floor(Math.random() * 3)
}
function DisplayComputer(value){
    computerDisplay.innerHTML = value;
}
function resultDisplayer(value){
    if(value=='win'){
        const currentPoints = parseInt(userPoints.innerHTML);
        const updatedPoints = currentPoints + 1;
        userPoints.innerHTML = updatedPoints;
        console.log(currentPoints);
    }else if(value=='lose'){
        const currentPoints = parseInt(computerPoints.innerHTML);
        const updatedPoints = currentPoints + 1;
        computerPoints.innerHTML = updatedPoints;
        console.log(currentPoints);
    }else if(value=='Draw'){
        console.log('draw');
    }else{
        console.log('error');
    }
    resultDisplay.innerHTML = value;
}
function selectWinner(userValue, computerValue){
    if(userValue==computerValue){
        resultDisplayer('Draw')
    }else if(userValue=="scissor" && computerValue =="paper"){
        resultDisplayer('Win')
    }else if(userValue=="paper" && computerValue =="scissor"){
        resultDisplayer('lose')
    }else if(userValue=="stone" && computerValue =="paper"){
        resultDisplayer('lose')
    }else if(userValue=="paper" && computerValue =="stone"){
        resultDisplayer('win')
    }else if(userValue=="scissor" && computerValue =="stone"){
        resultDisplayer('lose')
    }else if(userValue=="stone" && computerValue =="scissor"){
        resultDisplayer('win')
    }else{
        console.log(userValue);
        console.log(computerValue);
        resultDisplayer('error')
    }
}
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const choosedValue = document.querySelector('input[name="choice"]:checked').value;
    userDisplay.innerHTML = choosedValue
    console.log(choosedValue);
    const comp = getMathRandom();
    DisplayComputer(choices[comp]);

    selectWinner(choosedValue, choices[comp])
})
form.addEventListener('click',(action)=>{
    const choosedValue = document.querySelector('input[name="choice"]:checked').value;
    userDisplay.innerHTML = choosedValue
})