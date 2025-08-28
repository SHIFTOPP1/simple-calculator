// Get input-field and all buttons
const inputField = document.getElementById("input-field");
const buttons = document.querySelectorAll("button")


//Loop through buttons and click events
buttons.forEach(button => { 
    button.addEventListener("click", ()=> {
        const value=button.textContent;

        if(value === "C"){
            //clear input field
            inputField.value="";
       } else if (value === "="){
        try {
              //Evaluate the expression
              inputField.value= eval(inputField.value)
        } catch {
            inputField.value = "Error"
           }
       }else {
        //Add number/operator to display
        inputField.value += value;
       }
    })  
})

//Task 1:Sanitize your code
//a. ensure that after an evaluation, the input key should be cleared when anotehr button with a number is clcicked before the nymber clicked is displayed
//b. ensure that if the operation ends with a mathematical operator when the equal sign is clicked the last math operator should be removed before the operation is evaluated
//c. Ensure that no math opertor is displayed consecutively and it deos not begin the operation
//d. Add a four extra buttons; a button that removes the value one after the other at every click,
// , a decimal point button, a button that has double zeros and a percentage button.