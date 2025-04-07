// Cache at least one element using getElementByID
// Cahce at least one element using querySelector or querySelectorAll
// Use parent-child-sibling relationships at least once 
// Iterate over a collection of elements to accomplish a task 
// Create at least one element using createElement
// use Append or Prepend on child 
// DocumentFragment Interface or HTML templating with cloneNode
// Modify the HTML or text content with innerHTML innerText or textContent
// Modify and or css classes of an element in response to user interactions with style or ClassList
// Modify at least one attribute of an element in response to user interactions
// Register at least two different event listeneers and create the associated event handler functions
// Use at least two BOM properties or methods
// Include at least one form or input with HTML validation
// Inclide at least one form or input with DOM event-based validation

let nameInput = document.getElementById(`yourName`);
let importantInput = document.getElementById("important");

// document.getElementById(`theForm`).style.backgroundColor = ``;

function greeting(event) {
    alert ("Hello, " + nameInput.value)
}

function formHandler(event) {
    event.preventDefault();
    let formColor = document.getElementById(`color`);
    document.getElementById(`theForm`).style.backgroundColor = formColor.value;
}


