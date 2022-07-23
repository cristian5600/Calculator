const sum = function(a=0,b=0) {
	return a+b;
};

const subtract = function(a=0,b=0) {
  return a-b;
	
};
const display = document.getElementsByClassName(`display`);
display[0].innerHTML = `0`;
const buttons = Array.from(document.getElementsByClassName(`btn key`));
const divide = function(a,b) {
  return a/b;
	
};
buttons.forEach(element => {
    element.addEventListener(`click`,function(){
        display[0].innerHTML += this.innerHTML;
    })
});
function clearScreen(){

}
const multiply = function(a,b) {
  return a*b;
};
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