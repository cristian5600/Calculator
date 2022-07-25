const display = document.getElementsByClassName(`display`);
const BUTTONS = Array.from(document.getElementsByClassName(`btn key`));
const OPERATORS = Array.from(document.getElementsByClassName(`opr`));
const MAX_LENGTH = 9;
const ACCEPTED = [`-`,`+`,`X`,`/`];
const EQUAL = Array.from(document.getElementsByClassName(`eql`))
// get data , get operator , calculate , repeat

display[0].innerHTML = ``;
let data = new Data(``,``,``);




function resetData(){   // or initial set
    data = new Data(``,``,``);
    clearDisplay();
}
Data.prototype.addDigit = function(newDigit){ 
    if(data.newInput === `0` && ( newDigit === `0` || newDigit === 0)){ // in case user enters a digit after the first 0, ex:0123 in invalid
        console.log(`ERROR , INVALID NUMBER`);
        return;
    }
    this.newInput += `${newDigit}`;
}
Data.prototype.addOperator = function (operator){
    if(ACCEPTED.includes(operator) === true){
        this.operator = operator;
    }
    else alert(`ERROR , OPERATOR NOT FOUND`);
}
Data.prototype.calculate = function(){
    let result = `ERROR 00000000`
    if(this.operator === `+`)
        result =  sum(parseFloat(this.previousCalculation),parseFloat(this.newInput));
    else if(this.operator === `-`)
        result = subtract(parseFloat(this.previousCalculation),parseFloat(this.newInput));
    else if(this.operator === `X`)
        result = multiply(parseFloat(this.previousCalculation),parseFloat(this.newInput));
    else if(this.operator === `/`)
        result = divide(parseFloat(this.previousCalculation),parseFloat(this.newInput));
    else alert(`ERROR ~~~~`)
    this.previousCalculation = `${result}`;
    this.newInput = ``;
    this.operator = ``;
    return result;
    

}
function Data(previousCalculation,newInput,operator){
    this.previousCalculation = previousCalculation;
    this.newInput = newInput;
    this.operator = operator;
}


const operatorFunction = (event) => {
    console.log(event.path[0].innerHTML);
    data.addOperator(event.path[0].innerHTML);
    if(data.previousCalculation === ``){
        data.previousCalculation = data.newInput;
        data.newInput = ``;
    }
    else if( data.newInput === ``){
        console.log(`hello there error`);
    }
    else{
        data.calculate();
        clearDisplay();
        addToDisplay(event.path[0].innerHTML);
    }
}
const keysFunction = (event) => {
    console.log(event.path[0].innerHTML);
    addToDisplay(event.path[0].innerHTML);
    data.addDigit(event.path[0].innerHTML);
    if(data.newInput.length === 0){
        stopOperatorInput();
    }
    if(data.newInput.length === 1){
        startOperatorInput();
    }
    if(data.newInput.length === 9){
        stopKeysInput();
    }

}
const equalFunction = (event) => {
    console.log(event);
    if( data.newInput === `` || data.previousCalculation === `` || data.operator === ``){
        console.log(`ERROR , MISSING ARGUMENT`);
        return;
    }
    else
        data.calculate();
    clearDisplay();
    addToDisplay(data.previousCalculation);
}
function startEqual(){
    EQUAL[0].addEventListener(`click`, equalFunction )
}
function startOperatorInput(){
    OPERATORS.forEach(element => {
        element.addEventListener(`click`, operatorFunction );
    })

}
function stopOperatorInput(){
    OPERATORS.forEach(element => {
        element.removeEventListener(`click`,operatorFunction);
    }) 
}
function startKeysInput(){
    BUTTONS.forEach(element => {
        element.addEventListener(`click`, keysFunction );
    })
};
function stopKeysInput(){
    BUTTONS.forEach(element => {
        element.removeEventListener(`click`, keysFunction );
    })
};
function addToDisplay(val){
    display[0].innerHTML += val;
}
function clearDisplay(){
    display[0].innerHTML = ``;
}
const sum = function(a=0,b=0) {
	return a+b;
};

const subtract = function(a=0,b=0) {
  return a-b;
	
};
const multiply = function(a,b) {
  return a*b;
};
const divide = function(a,b) {
    return a/b;
      
  };