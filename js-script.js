//Storage equpiment, keep the old number, keep the old operator, and whether we need to operate
let numberStore = '';
let olderNumber = '';
let operatorStore ='';
let boolOperator = false;
//listener set up
const screen = document.querySelector("#screen");
const operators = document.querySelectorAll('.operator');
for (var i = 0; i< operators.length;++i){
  let current = operators[i].innerText;
  operators[i].addEventListener('click', function(){operatorClick(current)});
}
//Number Buttons setup
const numbers = document.querySelectorAll('.numbers');
for (var i = 0; i< numbers.length;++i){
  let current = numbers[i].innerText;
  numbers[i].addEventListener('click', function(){numberClick(current)});
}
const reseter = document.querySelector('#reset');
reseter.addEventListener('click', reset);
/*Number button function: 
When a number button is clicked, turn numberstore into string, 
concatanate the clicked number, 
parse into int 
and return to storage */
function numberClick(newNumber) {
  numberStore = numberStore + newNumber;
  console.log(numberStore);
  updateDisplay(numberStore);
}
//update display
function updateDisplay(text) {
  screen.textContent = text;
}
function clearScreen() {
  screen.textContent = '';
}
function reset() {
  clearScreen();
  olderNumber = '';
  numberStore = '';
  operatorStore = '';
  boolOperator = false;
}
function operatorClick(key) {
  if (boolOperator == true) {
    let test = 0;
    switch(operatorStore) {
        case '/':
          test = parseInt(olderNumber)/parseInt(numberStore);
          olderNumber = test.toString();
          numberStore ='';
          updateDisplay(olderNumber);
          break;
        case '+':
          test = parseInt(olderNumber)+parseInt(numberStore);
          olderNumber = test.toString();
          numberStore ='';
          updateDisplay(olderNumber);
          break;
        case '-':
          test = parseInt(olderNumber)-parseInt(numberStore);
          olderNumber = test.toString();
          numberStore ='';
          updateDisplay(olderNumber);
          break;
        case '*':
          test = parseInt(olderNumber)*parseInt(numberStore);
          olderNumber = test.toString();
          numberStore ='';
          updateDisplay(olderNumber);
          break;
      }
    if (key == '=') {
      olderNumber = '';
      numberStore = '';
      operatorStore = '';
      boolOperator = false;
    }
    else {
     operatorStore = key;
    }
  }
  else if(boolOperator == false) {
    if (key == '=') {
        olderNumber = '';
        numberStore = '';
        operatorStore = '';
        boolOperator = false;
    }
    else if (numberStore != '') {
      olderNumber = numberStore;
      numberStore = '';
      console.log(olderNumber +' j '+ numberStore)
      clearScreen();
      operatorStore = key;
      boolOperator = true;
      console.log(operatorStore);
    }
  }
}