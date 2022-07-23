const display = document.getElementsByClassName(`display`);
const buttons = Array.from(document.getElementsByClassName(`btn key`));
const data={
    number : 0,


};
// get data , get operator , calculate , repeat
display[0].innerHTML = `0`;

buttons.forEach(element => {
    element.addEventListener(`click`,function(){
        display[0].innerHTML += this.innerHTML;
    })
});
function getData( previousCalculation ){

}
function getOperator(){

}
function calculate(){

}
function reset(){
    
}

const operate = function(a=0,b=0,operator){
    if(operator === `+`)
        return sum(a,b);
    else if(operator === `-`)
        return subtract(a,b);
    else if(operator === `X`)
        return multiply(a,b);
    else if(operator === `/`)
        return divide(a,b);
    else return `ERROR`;
}
const sum = function(a=0,b=0) {
	return a+b;
};

const subtract = function(a=0,b=0) {
  return a-b;
	
};
function clearScreen(){

}
const multiply = function(a,b) {
  return a*b;
};
const divide = function(a,b) {
    return a/b;
      
  };