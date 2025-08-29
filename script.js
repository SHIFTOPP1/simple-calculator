// Get input-field and all buttons
const inputField = document.getElementById("input-field");
const buttons = document.querySelectorAll("button");

let evaluated = false; // Track if last action was "=" 

// Helper: check if value is an operator
const isOperator = (val) => ["+", "-", "*", "/"].includes(val);



//Loop through buttons and click events
buttons.forEach(button => { 
    button.addEventListener("click", ()=> {
        const value=button.textContent;

        if(value === "C"){
            //clear input field
            inputField.value="";
            evaluated = false;
       } else if (value === "="){
        try {
                     let expression = inputField.value;

        // (b) Remove trailing operator if exists
        if (isOperator(expression.slice(-1))) {
          expression = expression.slice(0, -1);
        }

        inputField.value = eval(expression);
        evaluated = true; // Mark as evaluated
      } catch {
        inputField.value = "Error";
        evaluated = true;
      }
    } else if (value === "⌫") {
      // (d) Backspace button → remove last character
      inputField.value = inputField.value.slice(0, -1);
    } else if (value === "%") {
      // (d) Percentage button → divide by 100
      try {
        inputField.value = parseFloat(inputField.value) / 100;
        evaluated = true;
      } catch {
        inputField.value = "Error";
      }
    } else {
      // (a) Clear after evaluation when new number is pressed
      if (evaluated && !isOperator(value)) {
        inputField.value = "";
        evaluated = false;
      }

      // (c) Prevent consecutive operators & starting with operator
      if (isOperator(value)) {
        if (
          inputField.value === "" || // prevent starting with operator
          isOperator(inputField.value.slice(-1)) // prevent consecutive operator
        ) {
          return; // do nothing
        }
      }

      // (d) Decimal point → allow only one per number segment
      if (value === ".") {
        const lastNum = inputField.value.split(/[\+\-\*\/]/).pop();
        if (lastNum.includes(".")) return;
      }

      // Add value to input field
      inputField.value += value;
      evaluated = false;
    }
  });
});
 



//Task 1:Sanitize your code
//a. ensure that after an evaluation, the input key should be cleared when anotehr button with a number is clcicked before the nymber clicked is displayed
//b. ensure that if the operation ends with a mathematical operator when the equal sign is clicked the last math operator should be removed before the operation is evaluated
//c. Ensure that no math opertor is displayed consecutively and it deos not begin the operation
//d. Add a four extra buttons; a button that removes the value one after the other at every click,
// , a decimal point button, a button that has double zeros and a percentage button.