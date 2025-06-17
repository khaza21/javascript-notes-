let Numbers = { 
  a: 10,
  b: 5,
  result: 0,
};

function arithmeticoperations(numbers) {
   add();
  
  function add() {
    numbers.result = numbers.a + numbers.b;
    console.log("Addition:", numbers.result);
    subtract();
  }

  function subtract() {
    numbers.result = numbers.a - numbers.b;
    console.log("Subtraction:", numbers.result);
    multiply();
  }

  function multiply() {
    numbers.result = numbers.a * numbers.b;
    console.log("Multiplication:", numbers.result);
    divide();
  }

  function divide() {
    numbers.result = numbers.a / numbers.b;
    console.log("Division:", numbers.result);
  }

 
}

arithmeticoperations(Numbers);

